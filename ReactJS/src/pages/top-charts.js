import Navigation from '../components/navigation';
import TopArtists from '../components/top-artists';
import TopTracks from '../components/top-tracks';
import SearchTracks from '../components/search-tracks';
function TopCharts(){
    return (
        <div>
            <Navigation/>
            <SearchTracks/>
            <TopArtists/>
            <TopTracks/>
        </div>
    )
}

export default TopCharts;