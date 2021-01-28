class Api::TracksController < ApplicationController

    def index 
      # debugger
      @tracks = Track.where(album_id: params[:album_id])
      @album_id = params[:album_id]
      render :index
    end
end
