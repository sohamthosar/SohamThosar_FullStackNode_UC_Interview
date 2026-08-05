import React from 'react';

export const EpisodeCard = ({ episode }) => {
    const seasonColors = [
        "#ff6b6b",
        "#4ecdc4",
        "#45b7d1", 
        "#96ceb4", 
        "#feca57", 
        "#ff9ff3", 
        "#54a0ff", 
        "#5f27cd", 
        "#1dd1a1", 
        "#ff9f43"
    ];
    return (
        <>
            <div className='container'>
                <div className="col">
                    <div className="card" style={{border: `2px solid ${seasonColors[episode.season - 1]}`}}>
                        <div className="card-body">
                            <h3 className="card-title" style={{ fontFamily: "Abril Fatface, serif", color: `${seasonColors[episode.season - 1]}` }}>{episode.name}</h3>
                            <h6 className="season-ep" style={{ fontFamily: "DM Sans, sans-serif"}}>S{episode.season}E{episode.number} • {episode.airdate} • {episode.runtime} mins</h6>
                            <p className='summary' style={{ fontSize: "16px", fontFamily: "DM Sans, sans-serif" }}>{episode.summary.replace(/<[^>]*>/g, "")}</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr style={{ width: "100%" }} />
        </>
    )
}

export default EpisodeCard;
