class Api::TracksController < ApplicationController

    def index 
      # debugger
      @tracks = Track.where(album_id: params[:album_id])
      @album_id = params[:album_id]
      render :index
    end


    def create 
      debugger
      # package = valid_params
      @album = Album.find(params[:album_id])
      @track = Track.new(valid_params)

      if @track.save 
        debugger
          @tracksArr = Track.find(album_id: @album.id).pluck(:id)
          render :show
      else
        debugger
        render json: {errors: @track.errors.full_messages}
      end   

    end

    def valid_params
      params.require(:track).permit(:title, :song, :album_id, :track_no)
    end

end
