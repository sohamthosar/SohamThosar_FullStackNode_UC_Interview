import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Header = () => {
  let headerStyle = {
    backgroundColor: "rgb(28, 16, 24)",
    width: "100%",
    height : "400px",
    display : 'flex',
    alignItems : 'center',
  };

  let titleStyle = {
    fontFamily : 'Abril Fatface, serif',
    fontWeight : '400',
    fontSize : '88px',
    background : 'linear-gradient(to bottom right, rgb(45, 27, 105) 0%, rgb(107, 33, 168) 50%, rgb(217, 119, 6) 100%)',
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent"
  };

  let descTitleStyle = {
    fontFamily: "Abril Fatface, serif",
    fontSize: "1.4rem",
    color: "rgb(249, 115, 22)",
    fontWeight: "400"
  };

  let descTitle = {
    fontSize: "0.7rem",
    color: "rgba(255, 255, 255, 0.4)",
    fontFamily: "DM Sans, sans-serif"
  }

  return (
    <header style={headerStyle}>
      <div style={{width : "50%"}} className='container'>
        <h1 style={titleStyle}>FRIENDS</h1>

        <form className="d-flex" role="search">
          <input className="form-control me-2 placeholder-light" type="search" placeholder="Search episodes by name..." style={{ border: "1px solid rgba(255, 255, 255, 0.12)"}}/>
        </form>

        <div className='desc my-4' style={{display : "flex"}}>

          <div className='descItem' style={{display : "flex", flexDirection : "column", width : "15%"}}>
            <div style={descTitleStyle} >10</div>
            <div style={descTitle}>SEASONS</div>
          </div>

          <div className='descItem' style={{display : "flex", flexDirection : "column", width : "15%"}}>
            <div style={descTitleStyle} >236</div>
            <div style={descTitle}>EPISODES</div>
          </div>

          <div className='descItem' style={{display : "flex", flexDirection : "column", width : "15%"}}>
            <div style={descTitleStyle} >1994-2004</div>
            <div style={descTitle}>YEARS</div>
          </div>

          <div className='descItem' style={{display : "flex", flexDirection : "column", width : "15%"}}>
            <div style={descTitleStyle} >NBC</div>
            <div style={descTitle}>NETWORK</div>
          </div>

        </div>
      </div>
    </header>
  )
}

export default Header;
