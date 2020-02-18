class Reservation < ApplicationRecord
  belongs_to :hotel

  validates_presence_of :reservation_desc, :room_type, :guest_no, :start_date

end
