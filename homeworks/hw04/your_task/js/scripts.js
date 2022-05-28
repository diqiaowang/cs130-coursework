const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

// Note: AudioPlayer is defined in audio-player.js
const audioFile = 'https://p.scdn.co/mp3-preview/bfead324ff26bdd67bb793114f7ad3a7b328a48e?cid=9697a3a271d24deea38f8b7fbfa0e13c';
const audioPlayer = AudioPlayer('.player', audioFile);

const search = (ev) => {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

const getTracks = (term) => {
    document.querySelector('#tracks').innerHTML = "";

    console.log('about to fetch!');    
    fetch('https://www.apitutor.org/spotify/simple/v1/search?type=track&limit=5&q=' + term)
        .then(response => response.json())
        .then(tracks => {
            console.log("tracks are"+ tracks);
            if (tracks.length === 0) {
                document.querySelector('#tracks').innerHTML = `
                <p>No tracks found for "${term}"</p>
            `;
            }

            for (const track of tracks) {
                console.log(track)
                console.log("preview url is" + track.preview_url);
                document.querySelector('#tracks').innerHTML += `
                <button class="track-item preview" id="test" data-preview-track="${track.preview_url}" 
                onclick="handleTrackClick()">
                        <img src="${track.album.image_url}" alt="a photo of ${track.name}">
                        <i class="fas play-track fa-play" aria-hidden="true"></i>
                        <div class="label">
                            <h2>${track.name}</h2>
                            <p>
                                ${track.artist.name}
                            </p>
                        </div>
                    </button>
            `;
            }
        });
};

const getAlbums = (term) => {
    document.querySelector('#albums').innerHTML = "";

    console.log('about to fetch!');    
    fetch('https://www.apitutor.org/spotify/simple/v1/search?type=album&q=' + term)
        .then(response => response.json())
        .then(albums => {
            console.log(albums);
            if (albums.length === 0) {
                document.querySelector('#albums').innerHTML = `
                <p>No albums found for "${term}"</p>
            `;
            }

            for (const album of albums) {
                document.querySelector('#albums').innerHTML += `
                <section class="album-card" id="${album.id}">
                        <div>
                            <img src="${album.image_url}" alt="a photo of ${album.name}">
                            <h2>${album.name}</h2>
                            <div class="footer">
                                <a href="${album.spotify_url}" target="_blank">
                                    view on spotify
                                </a>
                            </div>
                        </div>
                    </section>
            `;
            }
        });
};

const getArtistHTML = (artist) => {
    if (!artist.image_url) {
        // artist.image.url = https://www.clipartmax.com/png/middle/473-4734552_blue-morpho-butterfly-clipart.png
    } return `<section class="artist-card" id="${artist.id}">
    <div>
        <img src="${artist.image_url}" alt="a photo of ${artist.name}">
        <h2>${artist.name}</h2>
        <div class="footer">
            <a href="${artist.spotify_url}" target="_blank">
                view on spotify
            </a>
        </div>
    </div>
</section>`
};

const getArtist = (term) => {
    console.log(`
        get artists from spotify based on the search term
        "${term}" and load the first artist into the #artist section 
        of the DOM...`);
    document.querySelector("#artist").innerHTML = "";
    fetch(baseURL + "?type=artist&q=" + term)
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        if (data.length > 0) {
            const firstArtist = data[0]
            console.log(firstArtist)
            document.querySelector("#artist").innerHTML += getArtistHTML (firstArtist)
        } else {
            document.querySelector("#artist").innerHTML = "No artists found!"
        }
    })
};  

const handleTrackClick = (ev) => {
    // const previewUrl = ev.currentTarget.getAttribute('id');
    // const previewUrl = ev.target.getAttribute('data-preview-track');
    // console.log("preview url is" + previewUrl);
    // audioPlayer.setAudioFile(previewUrl)
    // audioPlayer.play()
    // document.querySelector('footer').innerHTML += `
    //     <div id="current-track" class="track-item" data-preview-track="xxx">
    //             <img src="${track.album.image_url}">
    //             <i class="fas play-track fa-pause" aria-hidden="true"></i>
    //             <div class="label">
    //                 <h2>${track.name}</h2>
    //                 <p>
    //                     ${track.artist.name}
    //                 </p>
    //             </div>
    //     </div>`;
};

document.querySelector('#search').onkeyup = (ev) => {
    aria-label="search artists"
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
}