class Api::ChannelsController < ApplicationController

  def index
    @server = Server.find_by(id: params[:server_id])
    @channels = @server.channels

    render :index

  end

  def show
    @channel = Channel.find_by(id: params[:id])

    if @channel
      render :show
    else
      render json: ["There does not seem to be any message"]
    end

  end

  def create
    @channel = Channel.new(channel_params)
    
    if @channel.save
      render :show
    else
      render @channel.errors.full_messages
    end

  end

  def update

    @channel = Channel.find_by(id: params[:id])

    if !@message
      render json: ["There is no channel"]
    end

    if channel.update(channel_params)
      render :show
    else
      render @channel.errors.full_messages
    end

  end

  def destroy
    
    @channel = Channel.find_by(id: params[:id])
    @channel.destroy
    render :show

  end

  private

  def channel_params
    params.require(:channel).permit(:title, :author_id, :server_id)
  end

end
