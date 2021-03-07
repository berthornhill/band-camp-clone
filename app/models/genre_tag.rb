class GenreTag < ApplicationRecord
  belongs_to :taggable, polymorphic: true
end
