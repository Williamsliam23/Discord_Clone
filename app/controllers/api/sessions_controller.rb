class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    
    if @user
      login(@user) 
      render "api/users/show"
    else
      render json: ["Invalid username and/or password combination"], status: 401
    end
  end

  def destroy
    @user = current_user
    
    if @user
      logout
      render "api/users/show"
    else
      render json: ["You are not signed in currently!"], status: 404
    end
  end
end
