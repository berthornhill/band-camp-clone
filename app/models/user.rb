class User < ApplicationRecord
    validates :artist, presence: true
    validates :username, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :password, length: { minimum: 6, allow_nil: true}
    validates :email, presence: true, uniqueness: true

    attr_reader :password

    after_initialize :ensure_session_token!

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        user && user.is_password?(password) ? user : nil
    end
    
    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64(16)
    end

    def ensure_session_token!
        self.session_token ||= User.generate_session_token
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save
        self.session_token
    end

    # associations

    has_many :albums,
    class_name: :Album,
    primary_key: :id,
    foreign_key: :artist_id,
    dependent: :destroy

    has_many :tracks, through: :albums


end
