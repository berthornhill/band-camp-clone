class Api::SearchController < ApplicationController

    # this controller has one route '/api/search/' that receives a single parameter as {params: [:search]}. 
    # It then pulls related records from Users, Albums, Artists, and Tracks, and renders that via the :result view.

    def search
        @artists ||= []
        @albums ||= []
        @tracks ||= []
        @artist_results_array ||= []
        @album_results_array ||= []
        @track_results_array ||= []
   
        
        if params[:search].empty? 
            @artists = User.where("artist ILIKE ?", "%#{params[:search]}%").includes(artist_image_attachment: :blob, banner_image_attachment: :blob).to_a
            @artist_results_array = @artists.pluck(:id)
            render :result
        else
            @artists = User.where("artist ILIKE ?", "%#{params[:search]}%").includes(artist_image_attachment: :blob, banner_image_attachment: :blob).limit(5).to_a
            @albums = Album.where("album_name ILIKE ?", "%#{params[:search]}%").includes(album_art_attachment: :blob).limit(5).to_a
            @tracks = Track.where("title ILIKE ?", "%#{params[:search]}%").includes(song_attachment: :blob, artist: :tracks).limit(5).to_a
            
            
            @artist_results_array = @artists.pluck(:id)
            @album_results_array = @albums.pluck(:id)
            @track_results_array = @tracks.pluck(:id)

            
            artistIds = @tracks.map{|track| track.artist.id}
            
            append_artists_from_arr(artistIds)
            append_artists_from_arr(@albums.pluck(:artist_id))
            append_albums_from_tracks()
            render :result
        end
    end


    private 
    
    # These methods grab User/Artist and Album records associated which are not part of search result but needed for rendering #search results on front end.

    def append_artists_from_arr(artist_array)
        new_artists = User.where('id IN (?)', artist_array).includes(artist_image_attachment: :blob, banner_image_attachment: :blob).to_a
        @artists.concat(new_artists)
    end

    def append_albums_from_tracks
        albums_array = @tracks.pluck(:album_id)
        new_albums = Album.where('id IN (?)', albums_array).includes(album_art_attachment: :blob).to_a
        @albums.concat(new_albums)
    end

end