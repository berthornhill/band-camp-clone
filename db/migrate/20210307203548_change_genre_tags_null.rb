class ChangeGenreTagsNull < ActiveRecord::Migration[5.2]
  def change
    change_column_null :genre_tags, :tag, false
    add_index :genre_tags, [:tag, :taggable_type, :taggable_id], unique: true
  end
end

