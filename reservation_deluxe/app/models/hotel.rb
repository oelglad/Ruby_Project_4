class Hotel < ApplicationRecord
  # model association
  has_many :reservations, dependent: :destroy

  # validations
  validates_presence_of :hotel_name, :created_by
end
