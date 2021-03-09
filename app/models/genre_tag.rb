class GenreTag < ApplicationRecord
  
  validates :tag, uniqueness: { scope: [:taggable] }

  # polymorphic association on tags. tags belongs to Users, Albums, Tracks
  belongs_to :taggable, polymorphic: true

end
