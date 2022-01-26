class Api::MembershipsController < ApplicationController
  before_action :find_server, only: [:create]

  def index
    
  end

  def create
    @membership = Membership.new(membership_params)
    if @membership.save
      render json: ["Member"]
    else
      render @membership.errors.full_messages
    end
  end

  def destroy
    @membership = Membership.where(user_id: params[:user_id]).where(server_id: params[:server_id])
    @membership.first.destroy
    if @membership.where(server_id: params[:server_id]).length > 0
      render json: ["Bye"]
    else
      @server = Server.find_by(id: params[:server_id])
      @server.destroy
      render json: {id: @server.id}
    end
  end

  private

  def membership_params
    params.require(:membership).permit(:user_id, :server_id)
  end

  def find_server
    if params[:membership][:server_id]
      @server = Server.find_by(invite_code: params[:membership][:server_id])
      params[:membership][:server_id] = @server.id
    end
  end

end