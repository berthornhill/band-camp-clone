class Album < ApplicationRecord

    validates :artist_id, presence: true
    validates :album_name, presence: true

    belongs_to :artist,
        class_name: :User,
        foreign_key: :artist_id,
        primary_key: :id

    # has_many :tracks,
    #     class_name: :Track,
    #     foreign_key: :album_id,
    #     primary_key: :id,
    #     dependent: :destroy

    has_many :tracks, dependent: :destroy

end
