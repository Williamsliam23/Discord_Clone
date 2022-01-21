class Api::MembershipsController < ApplicationController

  def index
    @server = Server.find_by(id: params[:id])
  end

end