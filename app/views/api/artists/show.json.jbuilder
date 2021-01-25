# object  
# 
# artist: {
#     id: {artist stuff},
#     albums: {
#         id: {albums stuff},
#         id: {albums stuff},
#         id: {albums stuff},
#     }
# }



# json.artist do
   
    json.set! @artist.id do 
        json.id @artist.id
        json.artist @artist.artist
        json.bio @artist.bio
        json.location @artist.location
    end

    json.albums do
        @albums.each do |album|
            json.set! album.id do 
                json.id album.id
                json.albumName album.album_name
                json.description album.description
            end
        end
    end 
# end

