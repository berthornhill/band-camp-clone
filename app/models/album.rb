class Album < ApplicationRecord


    belongs_to :artist,
        class_name: :User,
        foreign_key: :artist_id,
        primary_key: :id,

end
