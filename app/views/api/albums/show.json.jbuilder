
json.album do
    
        json.id @album.id
        json.albumName @album.album_name
        json.description @album.description
        json.tracks @tracksArr
        json.artistId @album.artist_id
        if @album.album_art.attached? 
            json.albumArt url_for(@album.album_art)
        end
    
end


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


