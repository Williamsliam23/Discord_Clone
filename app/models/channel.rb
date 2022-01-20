class Channel < ApplicationRecord

  validates :author_id, :title, :server_id, presence: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :server,
    primary_key: :id,
    foreign_key: :server_id,
    class_name: :Server

  has_many :messages,
    foreign_key: :channel_id,
    dependent: :destroy,
    class_name: :Message

end
