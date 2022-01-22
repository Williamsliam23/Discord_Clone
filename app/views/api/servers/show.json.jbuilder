
json.set! "members" do
  if @members != nil
    @members.each do |user|
      json.set! user.id do
          json.extract! user, :id, :username, :email
      end
    end
  end
end
json.extract! @server, :id, :title, :creator_id, :invite_code
