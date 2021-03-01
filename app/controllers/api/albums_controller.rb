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
        @artist = User.find(params[:artist_id])
        @album = Album.new(album_params)
        debugger
        if @album.save 
            debugger
            @tracksArr = [];
            @albumsArr = Album.where(artist_id: @artist.id).pluck(:id) 
            render :show
        else
            debugger
            render json: {errors: @album.errors.full_messages }, status: 401
        end
       
    end

    
    def album_params 
        params.require(:album).permit(:album_name, :description, :album_art, :artist_id)
            
    end




end
