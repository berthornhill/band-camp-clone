class Api::AlbumsController < ApplicationController

    def show
        # debugger
        @album = Album.find(params[:id])
        render :show
    end

end
