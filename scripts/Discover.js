"use strict";

function getSongs() {}

async function getSimilarSongs(artist,song) {
const section = document.querySelector(".song-list");

for(let i = 0; i<20; i++){
    try {
        const response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=track.getsimilar&artist=${artist}&track=${song}&api_key=19646f906db9f7ad92e69e1727d6c87e&format=json`);
        const data = await response.json();

        const article = document.createElement('article');

        article.innerHTML = `
        <img src ="${data.similartracks.track[i].image[1]['#text']}" alt="${data.similartracks.track[i].name}">
        <h4>${data.similartracks.track[i].artist.name}</h4>
        <h4>${data.similartracks.track[i].name}</h4>
        `;

       section.appendChild(article);
    } catch (err){
        console.log(err);
    }


}
}

getSimilarSongs("muse","hysteria");








//const getSimilar = async (artist, song) => {

//     const url = `http://ws.audioscrobbler.com/2.0/?method=track.getsimilar&artist=${artist}&track=${song}&api_key=19646f906db9f7ad92e69e1727d6c87e&format=json`;

//     const response = await fetch(url);

//     const similarSongs = await response.json();

   
//     let divPadre = document.querySelector(".results-wrapper1");

//         console.log(similarSongs.similartracks.track.map(data =>{
    
//         let divMaked = document.createElement("div");
//         let article = document.createElement("article");
//         let h3 = document.createElement("h3");
//         let h4 = document.createElement("h4");
//         h3.innerHTML = data.artist.name;
//         h4.innerHTML = data.name;
//         divMaked.appendChild(h3);
//         divMaked.appendChild(h4);
//         divPadre.appendChild(divMaked);
//         }))
//     handleArtistInput();
//     handleSongInput();

// };

// getSimilar("muse","hysteria");



class Discover {
    constructor(){
        this.artistInput = document.querySelector("#artist");
        this.songInput = document.querySelector("#song");
        this.buttonInput = document.querySelector("#search");
        this.messageWrapper = document.querySelector(".message-container");
    }

//Metodos para manejar la informacion que insertamos en los input

handleArtistInput = (event) => {
    const artist = document.querySelector("#artist").value;
    console.log(event);
    console.log('artist', artist);
}


handleSongInput = (event) => {
    const song = document.querySelector("#song").value;
}


saveData = (event) => {
//Este event previene que se recargue la pagina
    event.preventDefault();

    const artist = this.artistInput.value;
    const song = this.songInput.value;



const newSearch = new Search(artist, song);





//Vaciar formulario
this.artistInput.value = '';
this.songInput.value = '';
}

//Funciones para cada uno de los input

addListeners = () => {

//Vincula lo que ocurre en los inputs

    this.artistInput.addEventListener('input', this.handleArtistInput);

    this.songInput.addEventListener('input', this.handleSongInput);


//enviara la informacion al formulario
    this.buttonInput.addEventListener('click', getSimilar);
}


}

const search = new Discover();

window.addEventListener('load', search.addListeners);















