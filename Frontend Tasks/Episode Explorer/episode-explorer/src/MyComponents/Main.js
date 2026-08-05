import React, {useState, useEffect} from 'react';
import {EpisodeCard} from './EpisodeCard';

export const Main = ({searchItem}) => {

    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {

        async function fetchEpisodes() {
            const response = await fetch("https://api.tvmaze.com/shows/431/episodes");
            const data = await response.json();
            setEpisodes(data);
            console.log(data);
        }
        fetchEpisodes();
    }, []);

    const filteredEpisodes = episodes.filter((episode) =>
        episode.name.toLowerCase().includes(searchItem.toLowerCase())
    );

    return (
        <div className='container my-4' style={{ display: 'flex', flexDirection: "column", gap: "4px", alignItems: "center", justifyContent: "center" }}>
            <h3>Showing {filteredEpisodes.length} of {episodes.length} episodes</h3><hr style={{width : "100%"}}/>
            {
                filteredEpisodes.map((episode) => (
                    <EpisodeCard key={episode.id} episode={episode}/> 
                ))
            }
        </div>
    )
}

export default Main;
