json.set! @album_id do   
    json.array! @tracks, :id, :title, :track_no  
end



# {
#     album_id: {
#         tracks: {

#         }
#     }
# }