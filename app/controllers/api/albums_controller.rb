class Api::AlbumsController < ApplicationController

   
    def show
        
        @album = Album.where(id: params[:id]).includes(album_art_attachment: :blob)[0]
        @tracks = Track.where(album_id: params[:id]).includes(song_attachment: :blob).to_a        
        render :show

    end


    def create 
       
        @album = Album.new(album_params)
        
        if @album.save 
            
            @artist = User.where(id: params[:artist_id]).includes(artist_image_attachment: :blob, banner_image_attachment: :blob)[0]
            @album = Album.where(id: @album.id).includes(album_art_attachment: :blob)[0]
            @tracksArr = [];
            
            @albumsArr = @artist.albums.pluck(:id) 
            render :show
        else
            
            render json: {errors: @album.errors.full_messages }, status: 401
        end
       
    end

    def destroy
        

        @album = Album.where(id: params[:id]).includes(:tracks)[0]
        @tracks_arr = @album.tracks.pluck(:id)
        @artist_id = @album.artist_id
        @album_id = @album.id
        
        if @album.artist_id == current_user.id
            
            @album.destroy
            @updated_albums_array = User.find(@artist_id).albums.pluck(:id)
            render :delete
        else
            render json: {error: "current user does not match"}
        end

    end



    
    def album_params 
        params.require(:album).permit(:album_name, :description, :album_art, :artist_id)
            
    end




end

 