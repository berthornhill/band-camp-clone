class Api::AlbumsController < ApplicationController

    def index 
        # debugger
        @albums = Album.where(artist_id: (params[:artist_id]))
        # debugger
        @artist_id = params[:artist_id]
        render :index
    end
   
    def show
        # debugger
        @album = Album.find(params[:id])
        @tracks = Track.where(album_id: params[:id])
        render :show


    end


    def create 
    
        debugger
    end

end
