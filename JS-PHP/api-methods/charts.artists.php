<?php
require "api-config.php";
function callAPI(){
    //Test JSON: 'json/chart.artists.json';
    //Endpoint hardcoded: 'https://api.musixmatch.com/ws/1.1/chart.artists.get?page=1&page_size=5&country=it&apikey=YOUR_API_KEY'
    $api_config = new mxm_api;
    $url = $api_config->mxm_endpoint . "chart.artists.get?page=1&page_size=5&country=it&apikey=" . $api_config->mxm_api_key;

    $response = file_get_contents($url);
    $response = json_decode($response);
    
    return $response;
}
$json = callAPI();

foreach ($json->message->body->artist_list as $artist){
    $row = '<div id="' . $artist->artist->artist_id . '" class="api-row">';
    $row = $row . '<span class="title">' .  $artist->artist->artist_name . '</span><br/>';
    $row = $row . '<span class="description">' .  $artist->artist->artist_rating . '</span>';
    
    $row = $row . '</div>';
    
    echo $row;
}

?>