class CreateHotels < ActiveRecord::Migration[6.0]
  def change
    create_table :hotels do |t|
      t.string :hotel_name
      t.string :city
      t.string :state
      t.integer :zip_code
      t.string :img_url
      t.string :created_by

      t.timestamps
    end
  end
end
