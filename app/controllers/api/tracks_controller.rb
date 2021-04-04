class Api::TracksController < ApplicationController

    def index  
      @tracks = Track.where(album_id: params[:album_id])
      @album_id = params[:album_id]
      render :index
    end


    def create 
      @album = Album.find(params[:album_id])
      @track = Track.new(valid_params)

      if @track.save 
        @tracksArr = Track.where(album_id: @album.id).pluck(:id)
        render :show
      else
        render json: {errors: @track.errors.full_messages}
      end   

    end

    
    def valid_params
      params.require(:track).permit(:title, :song, :album_id, :track_no)
    end


    def destroy 
      @track = Track.where(id: params[:id]).includes(:artist)[0]
      @track_id = @track.id
      @album_id = @track.album_id

      
      if @track.artist.id == current_user.id
        @track.destroy
        @tracks_array = Album.find(@album_id).tracks.pluck(:id)
        render :delete
      else
        render json: {error: "current user does not match"}
      end

    end

end
