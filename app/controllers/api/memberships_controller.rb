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
    @membership = Membership.find_by(id: params[:id])
    @membership.destroy
    render json: ["Bye"]
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