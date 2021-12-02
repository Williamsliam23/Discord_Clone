class Api::MessagesController < ApplicationController

  def index

    @messages = Message.all

    render :index

  end

  def show
    @message = Message.find_by(id: params[:id])

    if @message
      render :show
    else
      render json: ["There does not seem to be any message"]
    end

  end

  def create
    @message = Message.new(message_params)
    
    if @message.save
      render :show
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
    else
      render @message.errors.full_messages
    end

  end

  def destroy
    
    @message = Message.find_by(id: params[:id])
    @message.destroy
    render :show

  end

  private

  def message_params
    params.require(:message).permit(:body, :author_id)
  end

end
