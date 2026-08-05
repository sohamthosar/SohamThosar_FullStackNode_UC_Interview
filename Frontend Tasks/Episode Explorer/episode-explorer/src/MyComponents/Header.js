import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.css";

export const Header = ({ searchItem, setSearchItem }) => {
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
  };

  return (
    <header>
      <div className='container header-content'>
        <h1 className='titleStyle'>FRIENDS</h1>

        <form className="d-flex" role="search">
          <input className="form-control me-2 placeholder-light" type="search" placeholder="Search episodes by name..." value={searchItem} onChange={(e) => setSearchItem(e.target.value)} style={{ border: "1px solid rgba(255, 255, 255, 0.12)"}}/>
        </form>

        <div className='desc my-4' style={{display : "flex", width : "100%", justifyContent : "space-between"}}>

          <div className='descItem' style={{display : "flex", flexDirection : "column", width : "20%"}}>
            <div style={descTitleStyle}>10</div>
            <div style={descTitle}>SEASONS</div>
          </div>

          <div className='descItem' style={{display : "flex", flexDirection : "column", width : "20%"}}>
            <div style={descTitleStyle}>236</div>
            <div style={descTitle}>EPISODES</div>
          </div>

          <div className='descItem' style={{display : "flex", flexDirection : "column", width : "20%"}}>
            <div style={descTitleStyle}>1994-2004</div>
            <div style={descTitle}>YEARS</div>
          </div>

          <div className='descItem' style={{display : "flex", flexDirection : "column", width : "20%"}}>
            <div style={descTitleStyle}>NBC</div>
            <div style={descTitle}>NETWORK</div>
          </div>

        </div>
      </div>
    </header>
  )
}

export default Header;
