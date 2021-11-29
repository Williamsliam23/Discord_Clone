class Api::UsersController < ApplicationController
  before_action :require_logged_in, only: [:index, :destroy]
  before_action :require_logged_out, only: [:create]
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by( id: params[:id])
  end

  def index
    @users = User.all
    render :index
  end

  def update
    @user = current_user

    if !@user
      render json: ["Sign in to edit your user profile"]
    end

    if @user.update(user_params)
      render :show
    else
      render json: ["That user does not seem to exist"]
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
