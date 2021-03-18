json.album do 
    json.id @album_id
    json.tracks @tracks_array
end


json.track @track_id