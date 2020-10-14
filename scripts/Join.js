



const getSimilar = async () => {
    const response = await fetch('http://ws.audioscrobbler.com/2.0/?method=track.getsimilar&artist=${artist}&track=${song}&api_key=19646f906db9f7ad92e69e1727d6c87e&format=json');
    console.log(response)

    const similar = await response.json();
    const firstSimilar =    [0];
    console.log(firstSimilar);

};

getSimilar();