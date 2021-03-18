# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all
Album.destroy_all
Track.destroy_all



User.create!(
    username: "demo",
    artist: "demo",
    password: "testpassword",
    email:"test@test.com"
)

BANDS = ["Shawn Mendes",
    "Anuel AA",
    "Ariana Grande",
    "Ed Sheeran",
    "Post Malone",
    "Ed Sheeran",
    "Lil Tecca",
    "Sam Smith",
    "Lil Nas X",
    "Billie Eilish",
    "Bad Bunny",
    "DJ Snake",
    "Lewis Capaldi",
    "Sech",
    "Drake",
    "Chris Brown",
    "J Balvin",
    "Post Malone",
    "Y2K",
    "Lizzo",
    "MEDUZA",
    "Lil Nas X",
    "Jhay Cortez",
    "Lunay",
    "Billie Eilish",
    "Shawn Mendes",
    "Tones and I",
    "Ali Gatie",
    "Daddy Yankee",
    "J Balvin",
    "The Chainsmokers",
    "Ariana Grande",
    "Maluma",
    "Young Thug",
    "Katy Perry",
    "Martin Garrix",
    "Sech",
    "Ed Sheeran",
    "Jonas Brothers",
    "Lauv",
    "Kygo",
    "Taylor Swift",
    "Lady Gaga",
    "Khalid",
    "Marshmello",
    "Nicky Jam",
    "Marshmello",
    "The Chainsmokers",
    ]

ALBUMS = ["Harry Styles",
    "JackBoys",
    "Rare",
    "Music to Be Murdered By",
    "Funeral",
    "Changes",
    "Map of the Soul: 7",
    "My Turn",
    "Eternal Atake",
    "After Hours",
    "Blame It on Baby",
    "38 Baby 2",
    "Here and Now",
    "Good Intentions",
    "High Off Life",
    "Wunna",
    "Chromatica",
    "My Turn",
    "Shoot for the Stars, Aim for the Moon",
    "Legends Never Die",
    "Folklore","Detroit 2",
    "Top",
    "Folklore",
    "Tickets to My Downfall",
    "Savage Mode II", 
    "What You See Is What You Get",
    "Positions",
    "Power Up",
    "Be",
    "El Último Tour Del Mundo",
    "Wonder" ,
    "Evermore",
    "The Diary of Alicia Keys",
    "Closer",
    "Speakerboxxx/The Love Below",
    "Kamikaze",
    "When the Sun Goes Down",
    "Feels Like Home",
    "Confessions",
    "D12 World",
    "Under My Skin",
    "Confessions",
    "Contraband",
    "To the 5 Boroughs",
    "Kiss of Death",
    "The Hunger For More",
    "License to Chill",
    'Autobiography',
    "Now 16",
    "Autobiography",
    "Now 16",
    "Live Like You Were Dying",
    "What I Do",
    "After Hours",
    "How to Dismantle an Atomic Bomb",
    'Collision Course', 
    "The Red Light District",
    "Daydream How to Dismantle an Atomic Bomb",
    "All Eyez on Me",
    'Anthology 2',
    "Evil Empire",
    "Fairweather Johnson",
    'The Score',
    'Load',
    "It Was Written",
    "Jagged Little Pill",
    "No Code",
    "Home Again",
    "Falling into You",
    "Falling into You",
    "Recovering the Satellites",
    "Best Of – Volume I",
    "Anthology 3",
    "The Don Killuminati: The 7 Day Theory",
    "Tha Doggfather",
    "Razorblade Suitcase"]
        

BANDS.each_with_index do | band, i |
    User.create!(
        username: "#{band}#{i}",
        password: "averysecurepassword$^$$%#%@",
        email:"test#{i}@test.com",
        artist: band,
        bio: "We are a great band! We hope you enjoy our music! Like and follow us on Bandlamp!",
        location: "USA",
    )
    x = rand(1..31)
    
    User.last.artist_image.attach(io: URI.open("https://bandlamp-seed.s3.us-east-2.amazonaws.com/images/#{x}.jpg"), filename: "#{x}.jpg")
    x = rand(1..31)
    
    User.last.banner_image.attach(io: URI.open("https://bandlamp-seed.s3.us-east-2.amazonaws.com/images/#{x}.jpg"), filename: "#{x}.jpg")
    
end


User.all.ids.each do |id| 
    
    numAlbums = rand(1..3)
    
    numAlbums.times {
        Album.create!(
            artist_id: id,
            album_name: "#{ALBUMS.sample}",
            description: "This is our newest realese! It's was a labor of love and it would mean a lot to us if you would listen to it and like and follow us on Bandlamp. Peace and love!"
        )
        x = rand(1..31)
        Album.last.album_art.attach(io: URI.open("https://bandlamp-seed.s3.us-east-2.amazonaws.com/images/#{x}.jpg"), filename: "#{x}.jpg")
    }
end

User.create!(username: "Bert", artist: "Bert Hill, Developer", password: "anothersecurepassword", email: "bert@bert", bio: "I am a full stack software engineer, musician, and educator. I have a love of computers, learning, music as well as for sharing my enthusiasm for these things with anyone who will listen.
Currently, I’m building in Ruby, Rails, JavaScript, React, Redux but I am always looking to learn more languages and grow as a developer. As a musician, I've performed and recorded all over the country but mostly around New York City. Feel free to follow me on LinkedIn, check out my GitHub if you‘d like to connect or collaborate. Links can be found in the footer section.
Thanks for visiting and I hope you enjoy! - Bert Hill")
Album.create!(artist_id: User.last.id, album_name: "Sample Tracks", description: "Feel free to connect on LinkdIn, check out my github.")


waterfront = URI.open('https://bandlamp-seed.s3.us-east-2.amazonaws.com/waterfront.wav')
Track.create!(title: "On The Waterfront-Opening Horn Solo", album_id: Album.last.id, track_no: 1)
Track.last.song.attach(io: waterfront, filename: 'waterfront.wav')

Track.create!(title: "Zocalo Quintet Demo Reel", album_id: Album.last.id, track_no: 3)
Track.last.song.attach(io: URI.open('https://bandlamp-seed.s3.us-east-2.amazonaws.com/zoc_demo.mp3'), filename: 'zoc_demo.mp3')

Track.create!(title: "The Silent Flame, by Ke-Chia Chen", album_id: Album.last.id, track_no: 2)
Track.last.song.attach(io: URI.open('https://bandlamp-seed.s3.us-east-2.amazonaws.com/silent_flame.mp3'), filename: 'silent_flame.mp3')


