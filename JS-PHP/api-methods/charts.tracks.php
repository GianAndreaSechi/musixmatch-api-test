<?php
require "api-config.php";
function callAPI(){
    //Test JSON: 'json/chart.artists.json';
    //Endpoint hardcoded: 'https://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=5&country=it&apikey=YOUR_API_KEY'
    $api_config = new mxm_api;
    $url = $api_config->mxm_endpoint . "chart.tracks.get?page=1&page_size=5&country=it&apikey=" . $api_config->mxm_api_key;

    $response = file_get_contents($url);
    $response = json_decode($response);
    
    return $response;
}
$json = callAPI();

foreach ($json->message->body->track_list as $track){
    $row = '<div id="' . $track->track->track_id . '" class="api-row">';
    $row = $row . '<span class="title">' .  $track->track->track_name . '</span><br/>';
    $row = $row . '<span class="description">' .  $track->track->artist_name . " - " . $track->track->album_name . '</span>';
    
    $row = $row . '</div>';
    
    echo $row;
}
?>