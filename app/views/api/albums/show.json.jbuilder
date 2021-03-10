
json.album do
    # json.set! @album.id do 
        json.id @album.id
        json.albumName @album.album_name
        json.description @album.description
        json.tracks @tracksArr
        json.artistId @album.artist_id
        if @album.album_art.attached? 
            json.albumArt url_for(@album.album_art)
        end
    # end
end


json.artist do
    # debugger
    json.id @artist.id
    json.artist @artist.artist
    json.bio @artist.bio
    json.location @artist.location
    json.albums @albumsArr
  
    if @artist.artist_image.attached?
         json.artistImage url_for(@artist.artist_image) 
    end
 
    if @artist.banner_image.attached?
        json.bannerImage url_for(@artist.banner_image)
    end
    # json.artistImage url_for(@artist.artist_image)
    # json.bannerImage url_for(@artist.banner_image)
end



# json.set! :tracks do   
#     json.array! @tracks, :id, :title, :track_no  
# end
# json.array! @tracks do |track|
#     json.id @track.id
#     json.title @track.title
#     json.trackNo @track.tra

