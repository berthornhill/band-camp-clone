class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )
        if @user
            login!(@user)
            render 'api/users/show';
        else
            render json: {
                login: 'wrong password or username'
                }, status: 401
        end
    end

    def destroy
     
        if current_user
            logout!
            render json: {message: "succesful logout"}
        else
            render json: ["can't logout, no current user"], status: 404
        end
    end
  
end
