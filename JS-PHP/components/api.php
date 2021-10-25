<div id="dvSearchContainer" class="col-md-12 hidden">
    <div class="row">
        <div class="col-md-3">
            <select id="searchType" class="form-select">
                <option value="q_track">Titolo Canzone</option>
                <option value="q_artist">Artista Canzone</option>
                <option value="q_track_artist">Titolo + Artista Canzone</option>
                <option value="q_lyrics">Interno Lyrics</option>
            </select>
        </div>
        <div class="col-md-6">
            <input id="searchValue" type="text" class="form-control" placeholder="Inserisci la ricerca..."/>
        </div>
        <div class="col-md-3">
            <button class="btn btn-search" onClick="javascript:searchTracks();">Cerca</button>
        </div>
    </div>
    <hr/>
</div>
<div id="dvApiContainer" class="col-md-12">
    
</div>
