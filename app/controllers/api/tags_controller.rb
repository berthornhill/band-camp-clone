class Api::TagsController < ApplicationController

    def index
        # debugger
        @artists = User.joins(:tags).select("users.*").where("genre_tags.tag = '#{params[:tag]}'").includes(artist_image_attachment: :blob, banner_image_attachment: :blob).to_a
        # debugger
        @tagged_array = @artists.pluck(:id)
        @all_tags = GenreTag.select(:tag).distinct.pluck(:tag)
        
        render :index
    end

    def show 
        # debugger
        
        @artists ||= []
        @albums ||= []
        @tracks ||= []

        @tracks = Track.joins(:tags).select("tracks.*").where("genre_tags.tag = '#{params[:id]}'").includes(song_attachment: :blob, artist: :tracks).to_a
       
        @tagged_array = @tracks.pluck(:id)

        append_artists_from_arr(@tracks)
        append_albums_from_tracks()

        # debugger
        render :show

    end



    private

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

