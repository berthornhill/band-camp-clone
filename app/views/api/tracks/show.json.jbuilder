

json.album do 
        json.id @album.id
        json.tracks @tracksArr  
end


json.track do 

    json.set! @track.id do
       
        json.id @track.id
        json.title @track.title
        json.albumId @track.album_id
        json.artistId @album.artist_id
        json.trackNo @track.track_no
        
        json.url url_for(@track.song)
        
    end
end