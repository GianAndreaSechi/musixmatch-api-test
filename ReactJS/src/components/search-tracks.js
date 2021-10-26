import classes from './search-tracks.module.css';
import React from 'react';
import axios from 'axios';
import Card from './layout/card';
import CardItem from './layout/card-item';

function SearchTrack(){
    let v_search = React.createRef();
    let v_type = React.createRef();
    const [search, setSearch] = React.useState([]);//{artist_id: "null", artist_name: "null"}

    function ClickHandler(){
        let url_request = 'https://api.musixmatch.com/ws/1.1/track.search?' + v_type.current.value +'=' + v_search.current.value + '&page_size=5&page=1&s_track_rating=desc&apikey=YOUR_API_KEY';
        
        axios.get(url_request)
        .then(result => {
            setSearch(result.data.message.body.track_list);
        },[])
    }

    
    return (
      <div className={classes.search_area}>
        <div className={classes.column}>
          <select ref={v_type}>
            <option value="q_track">Titolo Canzone</option>
            <option value="q_artist">Artista Canzone</option>
            <option value="q_track_artist">Titolo + Artista Canzone</option>
            <option value="q_lyrics">Interno Lyrics</option>
          </select>
          <input
            id="txtSearch"
            ref={v_search}
            type="text"
            placeholder="ricerca"
          ></input>
          <button onClick={ClickHandler}>Search</button>
        </div>

        <div className={classes.full_width}>
          <Card cssClass="width_30">
            <h3>TOP 3 Search</h3>
            <p>elenco top 3 ricerca</p>            
            {search.map((element, i) => {
              return (
                <CardItem
                  key={element.track.track_id}
                  name={element.track.track_name}
                  artist={element.track.artist_name}
                  album={element.track.album_name}
                  rating=""
                />
              );
            })}
          </Card>
        </div>
      </div>
    );
}

export default SearchTrack;