class Api::ServersController < ApplicationController

  def index
    @servers = Server.all
    render :index
  end

  def show
    @server = Server.find_by(id: params[:id])
    @memberships = Membership.where("server_id = ?", @server.id)
    @members = User.where(id: @memberships)
    p @members
    if @server
      render :show
    else
      render json: ["There does not seem to be any server"]
    end
  end

  def create
    @server = Server.new(server_params)
    
    if @server.save
      render :show
    else
      render @server.errors.full_messages
    end

  end

  def update

    @server = Server.find_by(id: params[:id])

    if !@server
      render json: ["There is no server"]
    end

    if server.update(server_params)
      render :show
    else
      render @server.errors.full_messages
    end

  end

  def destroy
    
    @server = Server.find_by(id: params[:id])
    @server.destroy
    render :show

  end

  private

  def server_params
    params.require(:server).permit(:title, :creator_id)
  end

end
