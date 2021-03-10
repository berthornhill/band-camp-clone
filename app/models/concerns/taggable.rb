module Taggable
    extend ActiveSupport::Concern

    included do 
        has_many :tags, as: :taggable, class_name: :GenreTag
    end

    def recieve_tag(tag)
        tag = tag.downcase
        self.tags.find_or_create_by(tag: tag)
    end
end


#  Example ActiveRecord query to search and select for models that associated with a single tag.
# User.joins(:tags).select("users.*").where("genre_tags.tag = 'rock'")
