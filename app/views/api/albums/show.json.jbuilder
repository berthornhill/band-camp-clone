

json.set! @album.id do 
    json.id @album.id
    json.albumName @album.album_name
    json.description @album.description
end

# json.set! :tracks do   
#     json.array! @tracks, :id, :title, :track_no  
# end
# json.array! @tracks do |track|
#     json.id @track.id
#     json.title @track.title
#     json.trackNo @track.tra

