class EmailValidator < ActiveModel::EachValidator
  def validate_each(record, attribute, value)
    unless value =~ /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
      record.errors.add attribute, (options[:message] || "is not a valid email")
    end
  end
end

class User < ApplicationRecord

  attr_reader :password

  validates :password_digest, :session_token, presence: true
  validates :email, uniqueness: true, email: true

  validates :password, length: { in: 6..20, allow_nil: true }
  validates :username, length: { maximum: 20, allow_nil: true }, uniqueness: true, presence: true

  has_many :messages,
    foreign_key: :author_id,
    dependent: :destroy,
    class_name: :Message

  has_many :channels,
    foreign_key: :author_id,
    dependent: :destroy,
    class_name: :Channel

  has_many :servers,
    foreign_key: :creator_id,
    dependent: :destroy,
    class_name: :Server

  has_many :memberships,
    foreign_key: :user_id,
    class_name: :Membership,
    dependent: :destroy

  has_many :server_memberships,
    through: :memberships,
    source: :server

  after_initialize :ensure_session_token


  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    generate_unique_session_token
    save!
    
    self.session_token
  end

  private

  def ensure_session_token
    generate_unique_session_token unless self.session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    self.session_token = new_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end

end
