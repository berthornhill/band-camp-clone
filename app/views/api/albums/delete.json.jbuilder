json.artist do 
    json.id @artist_id
    json.albums @updated_albums_array

end

json.album do
    json.id @album_id
end


json.tracks @tracks_arr