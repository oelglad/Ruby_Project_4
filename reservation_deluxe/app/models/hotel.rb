class Hotel < ApplicationRecord
  # model association
  has_many :reservations, dependent: :destroy

  # validations
  validates_presence_of :hotel_name, :city, :state, :zip_code,  :created_by, :img_url
end
