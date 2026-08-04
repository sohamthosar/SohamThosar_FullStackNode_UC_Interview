import React, {useState, useEffect} from 'react';
import {EpisodeCard} from './EpisodeCard';

export const Main = () => {

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
    return (
        <div className='container my-4' style={{ display: 'flex', flexDirection: "column", gap: "4px", alignItems: "center", justifyContent: "center" }}>
            {
                episodes.map((episode) => (
                    <EpisodeCard key={episode.id} episode={episode}/>
                ))
            }
        </div>
    )
}

export default Main;
