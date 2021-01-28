class Track < ApplicationRecord

    validates :title, :track_no, :album_id, presence: true

    
    belongs_to :album
        # class_name: :Album,
        # foreign_key: :album_id,
        # primary_key: :id,
    

    has_one :artist,
        through: :album,
        source: :artist
      

    
end
