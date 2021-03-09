class Api::TagsController < ApplicationController

    def index
        render json: {tst: "Hello from Tags Index"}
    end

end