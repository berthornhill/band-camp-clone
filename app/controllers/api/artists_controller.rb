class Api::ArtistsController < ApplicationController

     skip_before_action :verify_authenticity_token

    def index 
        ids = User.pluck(:id)
        sample = ids.sample(8) 
        @artists = User.where(id: sample)
        render :index
    end


    def show 
        # debugger
        @artist = User.find(params[:id])
        # debugger

        @albums = Album.where(artist_id: @artist.id) #pulls all albums with aritst_id of @artist
        @albumsArr = @albums.pluck(:id) # creates array of album :ids
        
        @tracks = User.find(params[:id]).tracks
        @tracksArr = @tracks.pluck(:id)
        render :show
    end

    def update
        @artist = User.find(params[:id])
        if @artist.update(update_params)
            

        render json: { word: "hello"}, status: 200
        debugger
    
    end

    def update_params
        params.require(:artist).permit(:location, :bio, :artist_image, :banner_image)
    end

end

