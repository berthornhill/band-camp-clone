

json.album do 
        json.id @album.id
        json.tracks @tracksArr  
end


json.track do 
    debugger
    json.set! @track.id do
       
        json.id @track.id
        json.title @track.title
        json.album_id @track.album_id
        json.artist_id @album.artist_id
        json.track_no @track.track_no
        
        json.url url_for(@track.song)
        
    end
end