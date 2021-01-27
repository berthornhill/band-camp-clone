class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render :show
        else 
            # debugger
            render json: {
                username:(@user.errors.full_messages_for(:username).first),
                email: (@user.errors.full_messages_for(:email).first),
                password:  !!@user.errors.full_messages_for(:password).first ? @user.errors.full_messages_for(:password).first 
                              : !!@user.errors.full_messages_for(:password_digest).first ?  "Password can't be blank" : nil,
                }, status: 401
        end
    end

    private
    
    def user_params
        params.require(:user).permit(:username, :email, :password, :artist)
    end

end
