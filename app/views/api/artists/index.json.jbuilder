
@artists.each do |artist|
    # debugger
    json.set! artist.id do 
        json.id artist.id
        json.artist artist.artist
        json.bio artist.bio
        json.location artist.location
    end
end