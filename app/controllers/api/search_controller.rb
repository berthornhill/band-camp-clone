class Api::SearchController < ApplicationController

    def search
        @results = User.where("artist ILIKE ?", "%#{params[:search]}%")
        # debugger

        @resultsArr = @results.pluck(:id)
        render :result
    end



end