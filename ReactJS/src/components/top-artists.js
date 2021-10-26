import './top-artists.module.css';
import Card from './layout/card';
import CardItem from './layout/card-item';
import axios from 'axios';

import React from 'react';


function TopArtists(){
    const [artists, setArtist] = React.useState([]);//{artist_id: "null", artist_name: "null"}
    React.useEffect(() => {
      axios.get('https://api.musixmatch.com/ws/1.1/chart.artists.get?page=1&page_size=5&country=it&apikey=YOU_API_KEY')
      .then(result => {
          setArtist(result.data.message.body.artist_list);
      })
    }, []);
    return(
        <div>
           <Card cssClass="width_30">
              <h3>TOP 3 ARTIST</h3>
              <p>elenco top 3 artists</p>
              {artists.map((element, i) => {
                return(
                    <CardItem 
                        key={element.artist.artist_id} 
                        name={element.artist.artist_name}
                        artist=""
                        album=""
                        rating = {element.artist.artist_rating}
                    />
                )
                })
              } 
           </Card>
        </div>
    );
}
export default TopArtists;