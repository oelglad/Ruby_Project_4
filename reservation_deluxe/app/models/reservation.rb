class Reservation < ApplicationRecord
  belongs_to :hotel

  validates_presence_of :reservation_desc
end
