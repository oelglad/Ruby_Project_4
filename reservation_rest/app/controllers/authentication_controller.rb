class AuthenticationController < ApplicationController
    skip_before_action :authorize_request, only: :authenticate
    # return auth token once user is authenticated
    def authenticate
      auth_token =
          AuthenticateUser.new(auth_params[:email], auth_params[:password]).call
         response= json_response(auth_token: auth_token), email:auth_params[:email])
          # json_response(response, :created)
    end
  
  
    private
  
    def auth_params
      params.permit(:email, :password)
    end
  end
  