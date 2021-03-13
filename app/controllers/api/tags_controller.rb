class Api::TagsController < ApplicationController

    def index
        debugger
        @artists = User.joins(:tags).select("users.*").where("genre_tags.tag = '#{params[:tag]}'").includes(artist_image_attachment: :blob, banner_image_attachment: :blob).to_a
        # debugger
        @albums = Album.joins(:tags).select("albums.*").where("genre_tags.tag = '#{params[:tag]}'").includes(album_art_attachment: :blob, tracks: :album ).to_a
        debugger
        @tagged_artists = @artists.pluck(:id)
        @tagged_albums = @albums.pluck(:id)
        debugger
        append_artists_from_arr(@albums.pluck(:artist_id))
        debugger
        @all_tags = GenreTag.select(:tag).distinct.pluck(:tag)
        @currentTag = params[:tag]
     
        render :index
    end

    def show 
        # debugger
        
        @artists ||= []
        @albums ||= []
        @tracks ||= []

        @tracks = Track.joins(:tags).select("tracks.*").where("genre_tags.tag = '#{params[:id]}'").includes(song_attachment: :blob, artist: :tracks).to_a
       
        @tagged_array = @tracks.pluck(:id)
        @all_tags = GenreTag.select(:tag).distinct.pluck(:tag)
        @current_tag = params[:id]

        # debugger
        artistIds = @tracks.map{|track| track.artist.id}
        append_artists_from_arr(artistIds)
        append_albums_from_tracks()

        # debugger
        render :show

    end



    private

    def append_artists_from_arr(ids)
        # debugger
        new_artists = User.where('id IN (?)', ids).includes(artist_image_attachment: :blob, banner_image_attachment: :blob).to_a
        # debugger
        @artists.concat(new_artists)
    end

    def append_albums_from_tracks
        albums_array = @tracks.pluck(:album_id)
        new_albums = Album.where('id IN (?)', albums_array).includes(album_art_attachment: :blob).to_a
        @albums.concat(new_albums)
    end


end

