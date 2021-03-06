class Api::AlbumsController < ApplicationController

    def index 
        debugger
        @albums = Album.where(artist_id: (params[:artist_id]))
        # debugger
        @artist_id = params[:artist_id]
        render :index
    end
   
    def show
        debugger
        @album = Album.where(id: params[:id]).includes(album_art_attachment: :blob)[0]
        @tracks = Track.where(album_id: params[:id]).includes(song_attachment: :blob).to_a
        debugger
        render :show


    end


    def create 
        # debugger
        # @artist = User.find(params[:artist_id])

        @album = Album.new(album_params)
        # debugger
        if @album.save 
            # debugger
            @artist = User.where(id: params[:artist_id]).includes(artist_image_attachment: :blob, banner_image_attachment: :blob)[0]
            @album = Album.where(id: @album.id).includes(album_art_attachment: :blob)[0]
            @tracksArr = [];
            # debugger
            @albumsArr = @artist.albums.pluck(:id) 
            render :show
        else
            # debugger
            render json: {errors: @album.errors.full_messages }, status: 401
        end
       
    end

    
    def album_params 
        params.require(:album).permit(:album_name, :description, :album_art, :artist_id)
            
    end




end

 