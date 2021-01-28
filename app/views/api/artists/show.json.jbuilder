# @artist
# @albums
# @albumsArr
# @tracksArr

json.artist do
    json.id @artist.id
    json.artist @artist.artist
    json.bio @artist.bio
    json.location @artist.location
    json.albums @albumsArr
end

json.albums do
    json.array! @albums do |album|
        # @albums.each do |album|
            json.set! album.id do 
                json.id album.id
                json.albumName album.album_name
                json.description album.description
                json.tracks @tracksArr
            end
        # end 
    end
end

json.tracks do 
    @tracks.each do |track|
        json.set! track.id do
            json.id track.id
            json.title track.title
            json.album_id track.album_id
            json.artist_id @artist.id
            json.track_no track.track_no

        end
    end
end
