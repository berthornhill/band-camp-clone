
json.artist do
    
    json.id @artist.id
    json.artist @artist.artist
    json.bio @artist.bio
    json.location @artist.location
    json.albums @albumsArr
  
    if @artist.artist_image.attached?
         json.artistImage url_for(@artist.artist_image) 
    end
 
    if @artist.banner_image.attached?
        json.bannerImage url_for(@artist.banner_image)
    end
end

json.albums do
    json.array! @albums do |album|
        json.set! album.id do 
            json.id album.id
            json.albumName album.album_name
            json.description album.description
            json.artistId album.artist_id
            
            json.tracks @tracks.select{ |track| track.album_id == album.id }.pluck(:id)
        
            if album.album_art.attached? 
                json.albumArt url_for(album.album_art)
            end
        end
    end
end

json.tracks do 
    @tracks.each do |track|
        json.set! track.id do
            json.id track.id
            json.title track.title
            json.albumId track.album_id
            json.artistId @artist.id
            json.trackNo track.track_no
         
            if track.song.attached? 
                 json.url url_for(track.song)
            end
        end
    end
end
