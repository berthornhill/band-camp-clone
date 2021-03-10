json.artists do
    @artists.each do |artist|
        # debugger
        json.set! artist.id do 
            json.id artist.id
            json.artist artist.artist
            json.bio artist.bio
            json.location artist.location

            if artist.artist_image.attached?
                json.artistImage url_for(artist.artist_image) 
            end
    
            if artist.banner_image.attached?
                json.bannerImage url_for(artist.banner_image)
            end
        end
    end
end

json.albums do
     @albums.each do |album|
        # debugger  
            json.set! album.id do 
                json.id album.id
                json.albumName album.album_name
                json.description album.description
                json.artistId album.artist_id
            
                json.tracks @tracks.select{ |track| track.album_id == album.id }.pluck(:id)
            
                if album.album_art.attached? 
                    json.albumArt url_for(album.album_art)
                end
            end
             
        # end 
    end
end


json.tracks do 
    @tracks.each do |track|
        # debuggers
        json.set! track.id do
            json.id track.id
            json.title track.title
            json.albumId track.album_id
            json.artistId track.artist.id
            json.trackNo track.track_no
         
            if track.song.attached? 
                 json.url url_for(track.song)
            end

        end
    end
end



json.search do
    json.artists  @artist_results_array
    json.albums  @album_results_array
    json.tracks @track_results_array 
end