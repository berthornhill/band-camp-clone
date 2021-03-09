class Track < ApplicationRecord

    include Taggable

    validates :title, :track_no, :album_id, :song, presence: true

    
    belongs_to :album
        # class_name: :Album,
        # foreign_key: :album_id,
        # primary_key: :id,
    

    has_one :artist,
        through: :album,
        source: :artist
      

    has_one_attached :song
    
end
