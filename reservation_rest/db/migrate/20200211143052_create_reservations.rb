class CreateReservations < ActiveRecord::Migration[6.0]
  def change
    create_table :reservations do |t|
      t.string :reservation_desc
      t.string :room_type
      t.integer :guest_no
      t.string :created_by
      datetime :start_date
      datetime :end_date
      
      t.timestamps
    end
  end
end
