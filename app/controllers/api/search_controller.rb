class Api::SearchController < ApplicationController

    def search
        @artists = User.where("artist ILIKE ?", "%#{params[:search]}%").includes(artist_image_attachment: :blob, banner_image_attachment: :blob).limit(5).to_a
        @albums = Album.where("album_name ILIKE ?", "%#{params[:search]}%").includes(album_art_attachment: :blob).limit(5).to_a
        @tracks = Track.where("title ILIKE ?", "%#{params[:search]}%").includes(song_attachment: :blob).limit(5).to_a
        # debugger
        
        @artist_results_array = @artists.pluck(:id)
        @album_results_array = @albums.pluck(:id)
        @track_results_array = @tracks.pluck(:id)
            # debugger
        render :result
    end



end