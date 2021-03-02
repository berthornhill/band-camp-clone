debugger

json.album do 
    json.set! @album.id do
        json.id @album.id
        json.tracks @tracksArr
    end
end


json.track do 
    json.set! @track.id do
        json.id @track.id
        json.title @track.title
        json.album_id @track.album_id
        json.artist_id @artist.id
        json.track_no track.track_no
        # debugger
        if track.song.attached? 
                json.url url_for(track.song)
        end
    end
end