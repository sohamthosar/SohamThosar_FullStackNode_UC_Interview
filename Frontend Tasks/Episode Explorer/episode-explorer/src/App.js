import { useState } from 'react';
import './App.css';
import {Header} from './MyComponents/Header';
import {Main} from './MyComponents/Main';

function App() {
  const [searchItem, setSearchItem] = useState("");
  return (
    <>
      <Header searchItem={searchItem} setSearchItem={setSearchItem}/>
      <Main searchItem={searchItem}/>
    </>
  );
}

export default App;