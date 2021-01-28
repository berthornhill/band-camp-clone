class Api::TestsController < ApplicationController

    def show
        @albums = Album.where(artist_id: (params[:id]))
        # debugger
        @artist_id = params[:id]
        
        # debugger

        render :show
    end

end
