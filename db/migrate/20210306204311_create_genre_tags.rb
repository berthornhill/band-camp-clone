class CreateGenreTags < ActiveRecord::Migration[5.2]
  def change
    create_table :genre_tags do |t|
      t.string :tag
      t.references :taggable, polymorphic: true, null: false

      t.timestamps
    end
  end
end
