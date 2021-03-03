json.artists do
    @results.each do |artist|
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

json.search do
    json.result @resultsArr
end