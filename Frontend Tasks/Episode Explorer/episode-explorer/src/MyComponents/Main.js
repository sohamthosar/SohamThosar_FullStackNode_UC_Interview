import React from 'react';

export const Main = () => {
    return (
        <div className='container my-4' style={{display : 'flex', alignItems : "center", justifyContent : "center"}}>
            <div className='card-container'>
                <div class="card mb-3" style={{ maxWidth: "540px", alignSelf: "center" }}>
                    <div class="row g-0">
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;
