class Customer < ApplicationRecord
  has_secure_password

  with_options presence: true do
    validates :name
    validates :email, uniqueness: true
    validates :password, length: { minimum: 6 }
  end
end
