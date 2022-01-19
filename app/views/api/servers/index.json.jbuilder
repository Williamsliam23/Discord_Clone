@servers.each do |server|
  json.set! server.id do
    json.extract! server, :id, :title, :creator_id
  end
end