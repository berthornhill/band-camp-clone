class Api::ArtistsController < ApplicationController

    def index 
        ids = User.pluck(:id)
        sample = ids.sample(8) 
        @artists = User.where(id: sample)
        render :index
    end


    def show 
        # debugger
        @artist = User.find(params[:id])
        @albums = Album.where(artist_id: @artist.id)
        render :show
    end
end

