class Api::SearchController < ApplicationController

    def search
        @artists
        @albums ||= []
        @tracks ||= []
        @artist_results_array ||= []
        @album_results_array ||= []
        @track_results_array ||= []
   
        # debugger
        
        if params[:search].empty? 
            @artists = User.where("artist ILIKE ?", "%#{params[:search]}%").includes(artist_image_attachment: :blob, banner_image_attachment: :blob).to_a
            @artist_results_array = @artists.pluck(:id)
            
            render :result
        else
            @artists = User.where("artist ILIKE ?", "%#{params[:search]}%").includes(artist_image_attachment: :blob, banner_image_attachment: :blob).limit(5).to_a
            @albums = Album.where("album_name ILIKE ?", "%#{params[:search]}%").includes(album_art_attachment: :blob).limit(5).to_a
            @tracks = Track.where("title ILIKE ?", "%#{params[:search]}%").includes(song_attachment: :blob, artist: :tracks).limit(5).to_a
            # debugger
            
            @artist_results_array = @artists.pluck(:id)
            @album_results_array = @albums.pluck(:id)
            @track_results_array = @tracks.pluck(:id)

            append_artists_from_arr(@tracks)
            append_artists_from_arr(@albums)
            append_albums_from_tracks()
            # debugger
        render :result
        end
    end


    private 
    
    # grabs artist and album records associated which are not part of search result but needed for rendering #search results on front end.

    def append_artists_from_arr(active_record_array)
        artist_array = active_record_array.map{|record| record.artist.id}.uniq!
        new_artists = User.where('id IN (?)', artist_array).includes(artist_image_attachment: :blob, banner_image_attachment: :blob).to_a
        # debugger
        @artists.concat(new_artists)
    end

    def append_albums_from_tracks
        albums_array = @tracks.pluck(:album_id)
        new_albums = Album.where('id IN (?)', albums_array).includes(album_art_attachment: :blob).to_a
        @albums.concat(new_albums)
    end

end