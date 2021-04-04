
# json.artist @artist_id

# @albums.each do |album|
#     json.set! album.id do 
#         json.id album.id
#         json.albumName album.album_name
#         json.artistId album.artist_id
#         json.description album.description
#     end
# end 

# returns 
# {
#     artist_id: {
#         album_id: {
#             ...album_info
#         }
#     }
# }