class Server < ApplicationRecord

  after_initialize :create_invite

  validates :creator_id, :title,  presence: true
  validates :invite_code, uniqueness: true

  belongs_to :creator,
    primary_key: :id,
    foreign_key: :creator_id,
    class_name: :User

  has_many :channels,
    foreign_key: :server_id,
    dependent: :destroy,
    class_name: :Channel

  has_many :memberships,
    foreign_key: :server_id,
    class_name: :Membership,
    dependent: :destroy

  has_many :members,
    through: :memberships,
    source: :user

  private
  def create_invite
    self.invite_code ||= SecureRandom::base64(10)
  end
end
