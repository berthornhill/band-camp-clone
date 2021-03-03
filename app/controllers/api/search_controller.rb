class Api::SearchController < ApplicationController

    def search
        @results = User.where("artist ILIKE ?", "%#{params[:search]}%")
        
        @resultsArr = @results.pluck(:id)
        # debugger
        render :result
    end



end