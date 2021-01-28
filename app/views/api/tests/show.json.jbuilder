# json.artist @artist_id
json.albums do
    @albums.each do |album|
        json.set! album.id do 
            json.id album.id
            json.albumName album.album_name
            json.description album.description
        end
    end 
end

# json.albums do
#     json.array! @albums do |album|
#         json.set! album.id do 
#                 json.id album.id
#                 json.albumName album.album_name
#                 json.description album.description
#         end
#     end
# end 

