import React from 'react';

export const EpisodeCard = ({episode}) => {
    return (
        <div className='container'>
            <div className="col">
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">{episode.name}</h3>
                        <h6 className="season-ep">S{episode.season}E{episode.number} • {episode.airdate} • {episode.runtime} mins</h6>
                        <p className='summary' style={{fontSize : "16px"}}>{episode.summary.replace(/<[^>]*>/g, "")}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EpisodeCard;
