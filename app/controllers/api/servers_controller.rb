class Api::ServersController < ApplicationController

  def index
    if params[:user_id]
      @user = User.find_by(id: params[:user_id])
      @servers = @user.server_memberships
      p @servers
  else
      @servers = Server.order("RANDOM()").limit(3).to_a.uniq
  end
    render :index
  end

  def show
    @server = Server.find_by(id: params[:id])
    @memberships = Membership.where("server_id = ?", @server.id)
    @members = User.joins(:memberships).where(memberships: { server_id: @server.id })
    if @server
      render :show
    else
      render json: ["There does not seem to be any server"]
    end
  end

  def create
    @server = Server.new(server_params)
    
    if @server.save
      Membership.create([user_id: @server.creator_id, server_id: @server.id])
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
