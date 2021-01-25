class Api::ArtistsController < ApplicationController

    def show 
        # debugger
        @artist = User.find(params[:id])
        @albums = Album.where(artist_id: @artist.id)
        render :show
    end
end

