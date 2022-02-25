import React from 'react';
import './App.css';
import MenuBar from './Components/MenuBarTop/MenuBar';
import Tweet from './Components/Tweet/Tweet'

function App() {
  return (
    <div className="App">
      <main>
        <MenuBar/>
        <Tweet/>
      </main>

    </div>
  )
}

export default App;
