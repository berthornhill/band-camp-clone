class Api::ArtistsController < ApplicationController

     skip_before_action :verify_authenticity_token

    def index 
        ids = User.pluck(:id)
        sample = ids.sample(8) 
        @artists = User.where(id: sample)
        render :index
    end


    def show 
        
        @artist = User.where(id: params[:id]).includes(artist_image_attachment: :blob, banner_image_attachment: :blob)[0]
        # @artist = User.where(id: params[:id]).includes(artist_image_attachment: :blob, banner_image_attachment: :blob)
        # debuggers
        #pulls all albums with aritst_id of @artist
        @albums = Album.where(artist_id: @artist.id).includes(album_art_attachment: :blob).to_a
        @albumsArr = @albums.pluck(:id) # creates array of album :ids
        @tracks = User.find(params[:id]).tracks.includes(song_attachment: :blob).to_a
        render :show
    end

    def update
        @artist = User.find(params[:id])
        # debugger

        if @artist.artist_image.attached? && params[:artist][:artist_image] 
            # debugger
            @artist.artist_image.purge
            # @artist.artist_image.attach(params[:artist][:artist_image])
            # @artist.update(params[:artist][:artist_image])
            # debugger
        end

        if @artist.banner_image.attached? && params[:artist][:banner_image]
            # debugger
            @artist.banner_image.purge
            # @artist.banner_image.attach(params[:artist][:banner_image])
            # @artist.update(params[:artist][:banner_image])
            # debugger
        end
        
        if @artist.update(update_params)
         
            @albums = Album.where(artist_id: @artist.id) #pulls all albums with aritst_id of @artist
            @albumsArr = @albums.pluck(:id) # creates array of album :ids
        
            @tracks = User.find(params[:id]).tracks
            @tracksArr = @tracks.pluck(:id)
            # debugger

           
            render :show
        else
            # debugger
            render json: {errors: @artist.errors.full_messages }, status: 401
        end
    
    end

    def update_params
        params.require(:artist).permit(:location, :bio, :artist_image, :banner_image)
    end

end

