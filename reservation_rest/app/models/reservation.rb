class Reservation < ApplicationRecord
      # model association
  belongs_to :hotels, dependent: :destroy

  # validations
  validates_presence_of :reservation_desc, :created_by
end
