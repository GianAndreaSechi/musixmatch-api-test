var mxm_api_key = 'YOUR_API_KEY'; //insert your musixmatch api key
var mxm_endpoint = 'https://api.musixmatch.com/ws/1.1/';
var avoid_cors = 'https://cors-anywhere.herokuapp.com/'; //use to avoid CORS calling into JavaScript (have to request temporary access browsing the url https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/)

function callAPI(el, apiMethod){
    /*
        *Function user to swith each request button to maintein the single page 
    */
    resetActive();
    setActive(el);
    switch (apiMethod.toLowerCase()){
        case 'ca':
            chartArtists();
        break;
        case 'ct':
            chartTracks();
        break;
        case 'st':
            setSearch();
        break;
    } 
}
/*API Method Calling */
function chartArtists(){
    /*
        * Call the chart.artists.get method of MusiXMatch API
    */

    makeCard('Top 5 Artisti');
    
    //Hardcoded Endpoint:   'https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.artists.get?page=1&page_size=3&country=it&apikey=YOUR_API_KEY'
    //Local File:           './api-methods/json/chart.artists.json'
    var request_endpoint = avoid_cors + mxm_endpoint + 'chart.artists.get?page=1&page_size=5&country=it&apikey=' + mxm_api_key;

    fetch(request_endpoint)
    .then(response => response.json())
    .then(data => {
        data.message.body.artist_list.forEach(val => {
            rowCard('a_' + val.artist.artist_id, val.artist.artist_name, null, null,val.artist.artist_rating);
        })
    });
}
function chartTracks(){
    /*
        *Call the chart.tracks.get method of MusiXMatch API
    */

    makeCard('Top 5 Canzoni');

    //Hardcoded Endpoint:   'https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=3&country=it&apikey=YOUR_API_KEY'
    //Local File:           './api-methods/json/chart.tracks.json'
    var request_endpoint = avoid_cors + mxm_endpoint + 'chart.tracks.get?page=1&page_size=5&country=it&apikey=' + mxm_api_key;
    
    fetch(request_endpoint)
    .then(response => response.json())
    .then(data => {
        data.message.body.track_list.forEach(val => {
            rowCard('t_' + val.track.track_id, val.track.artist_name, val.track.track_name, val.track.album_name, null);
        })
    });
}
function searchTracks(){
    /*
        *Call the track.search method of MusiXMatch API
    */

    var s_method = document.getElementById('searchType').value;
    var s_value = document.getElementById('searchValue').value;

    makeCard('Risultati ricerca');

    var request_endpoint = avoid_cors + mxm_endpoint +'track.search?' + s_method + '=' + s_value + '&page_size=5&page=1&s_track_rating=desc&apikey=' + mxm_api_key;

    fetch(request_endpoint)
    .then(response => response.json())
    .then(data => {
        data.message.body.track_list.forEach(val => {
            rowCard('ts_' + val.track.track_id, val.track.artist_name, val.track.track_name, val.track.album_name, null);
        })
    });
}

/* Fine API Method */


/* Utility per la visualizzazione delle risposte */
function resetActive(){
    /* 
        * Changing the active state of the button clicked searching every element whit ".active" class and removing that one
        * Doing the same for ".visible" class for the search
     */
    document.querySelectorAll('.active').forEach((element) => {
        element.classList.remove('active');
    });
    document.querySelectorAll('.visible').forEach((element) => {
        element.classList.remove('visible');
        element.classList.add('hidden');
    });
}
function setActive(el){
    /* 
        * Adding the active cssClass to the html element passed
     */
    el.classList.add('active');
}
function setSearch(){
    /* 
        * Setting visible the search container
     */
    var search = document.getElementById('dvSearchContainer');
    search.classList.add('visible');
    var container = document.getElementById('dvApiContainer');
    container.innerHTML = '';
}
function makeCard(title){
    /* 
        * Just setting the title of the card (o whatever you want not looped in the card)
     */
    var container = document.getElementById('dvApiContainer');

    container.innerHTML = '<h1>' + title + '</h1><hr/>';
}
function rowCard(id, artist, track, album, artist_rating){
    /* 
        * Build the row html construct of the card
        * This function supposed to call in forEach to build to show API results
     */
    var container = document.getElementById('dvApiContainer');

    var row = '';
    row = row + '<div id="'+ id +'" class="api-row">';
    
    if (track){
        row = row + '<span class="title">' +  track + '</span><br/>';
        row = row + '<span class="description">' +  artist + " - " + album + '</span>';
    } else {
        row = row + '<span class="title">' +  artist + '</span><br/>';
        row = row + '<span class="description">#' +  artist_rating + '</span>';
    }
    
    row = row + '</div>';

    container.innerHTML = container.innerHTML + row;
}