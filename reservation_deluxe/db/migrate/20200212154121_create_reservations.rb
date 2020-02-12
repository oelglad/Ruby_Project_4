class CreateReservations < ActiveRecord::Migration[6.0]
  def change
    create_table :reservations do |t|
      t.string :reservation_desc
      t.string :room_type
      t.integer :guest_no
      t.datetime :start_date
      t.datetime :end_date
      t.references :hotel, null: false, foreign_key: true

      t.timestamps
    end
  end
end
