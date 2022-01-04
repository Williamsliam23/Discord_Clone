class Channel < ApplicationRecord

  validates :author_id, :title, presence: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  has_many :messages,
    foreign_key: :channel_id,
    dependent: :destroy,
    class_name: :Message

end
