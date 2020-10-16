let buttonSubmit = document.querySelector("#buscar");

async function getSimilarSongs(artist, song)  {
    
    const section = document.querySelector(".song-list");
    const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=track.getsimilar&artist=${artist}&track=${song}&api_key=19646f906db9f7ad92e69e1727d6c87e&format=json`);
    const data = await response.json();

for(let i = 0; i<20; i++){
    try {
      

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

buttonSubmit.addEventListener("click", function(event){
    event.preventDefault()
    let inputArt = document.querySelector("#artista").value;
    let inputSong = document.querySelector("#songs").value;
    getSimilarSongs(inputArt,inputSong);
})