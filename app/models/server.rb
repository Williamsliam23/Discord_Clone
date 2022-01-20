class Server < ApplicationRecord

  validates :creator_id, :title, :channel_id, presence: true

  belongs_to :creator,
    primary_key: :id,
    foreign_key: :creator_id,
    class_name: :User

  has_many :channels,
    foreign_key: :server_id,
    dependent: :destroy,
    class_name: :Channel
end
