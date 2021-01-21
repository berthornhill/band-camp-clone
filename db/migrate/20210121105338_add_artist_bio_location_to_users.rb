class AddArtistBioLocationToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :artist, :string
    add_column :users, :bio, :text
    add_column :users, :location, :string
  end
end
