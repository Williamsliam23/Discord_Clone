class Api::MessagesController < ApplicationController
  before_action :find_channel

  def index

    @messages = @channel.messages

    render :index

  end

  def show
    @message = Message.find_by(id: params[:id])

    if @message
      render :show
    else
      render json: ["There does not seem to be a message"]
    end

  end

  def create

    @message = Message.new(message_params)
    if @message.save
      ChatChannel.broadcast_to(@channel, Api::MessagesController.render( :show, locals: {message: @message}))
    else
      render @message.errors.full_messages
    end
  end

  def update

    @message = Message.find_by(id: params[:id])

    if !@message
      render json: ["There is no message"]
    end

    if message.update(message_params)
      render :show
      ChatChannel.broadcast_to(@channel, Api::MessagesController.render( :show, locals: {message: @message}))
    else
      render @message.errors.full_messages
    end

  end

  def destroy
    
    @message = Message.find_by(id: params[:id])
    @message.destroy
    ChatChannel.broadcast_to(@channel, Api::MessagesController.render( :show, locals: {message: @message}))

  end

  private

  def message_params
    params.require(:message).permit(:body, :author_id, :channel_id)
  end

  def find_channel
    @channel = Channel.find_by(id: params[:channel_id])
  end

end
