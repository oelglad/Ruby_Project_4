class Addimagetohotels < ActiveRecord::Migration[6.0]
  def change
    add_column :hotels, :img_url, :string
  end
end
