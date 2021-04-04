json.artists do
    @artists.each do |artist|
        json.set! artist.id do 
            json.id artist.id
            json.artist artist.artist
            json.bio artist.bio
            json.location artist.location

            if artist.artist_image.attached?
                json.artistImage url_for(artist.artist_image) 
            end
    
            if artist.banner_image.attached?
                json.bannerImage url_for(artist.banner_image)
            end
        end
    end
end

json.albums do
     @albums.each do |album|  
        json.set! album.id do 
            json.id album.id
            json.albumName album.album_name
            json.description album.description
            json.artistId album.artist_id
        
            json.tracks album.tracks.pluck(:id)
        
            if album.album_art.attached? 
                json.albumArt url_for(album.album_art)
            end
        end           
    end
end




json.tags do 
    json.allTags @all_tags
    json.currentTag @current_tag
    json.artists @tagged_artists
    json.albums @tagged_albums
end