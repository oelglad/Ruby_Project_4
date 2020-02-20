class AddImageUrlToHotels < ActiveRecord::Migration[6.0]
  def change
    add_column :hotel, :img_url, :string
  end
end
