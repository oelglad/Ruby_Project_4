class User < ApplicationRecord
     # encrypt password
    has_secure_password
    has_many :reservations, foreign_key: :created_by
    # Validations
    validates :name, presence: true
    validates :email, uniqueness: true, presence: true
    validates :password_digest, presence: true
end
