class ApplicationController < ActionController::Base

    helper_method :current_user, :logged_in? 

    def login!(user)
        session[:session_token] = user.session_token
    end

    def logout! 
        current_user.reset_session_token!
        session[:session_token] = nil
    end

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
        return @current_user
    end

    def logged_in? 
        !!current_user
    end

    def require_logged_in
        render 'api/users' unless logged_in?         
    end

    def require_logged_out
        render 'api/session' unless !logged_in?
    end

end
