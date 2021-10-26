import './top-tracks.module.css';
import Card from './layout/card';
import CardItem from './layout/card-item';
import axios from 'axios';

import React from 'react';


function TopTracks(){
    const [tracks, setTracks] = React.useState([]);
    React.useEffect(() => {
        //local: './json/chart.tracks.json'
        axios.get('https://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=5&country=it&apikey=YOUR_API_KEY')
        .then(result => {
            setTracks(result.data.message.body.track_list);
        })
    }, []);
    return(
        <div>
            <Card cssClass="width_30">
              <h3>TOP 3 TRACKS</h3>
              <p>elenco top 3 canzoni</p>
              {tracks.map((element, i) => {
                return(
                    <CardItem 
                        key={element.track.track_id} 
                        name={element.track.track_name} 
                        artist={element.track.artist_name} 
                        album={element.track.album_name}
                        rating = ""
                    />
                )
                })
              } 
           </Card>
        </div>
    );
}
export default TopTracks;