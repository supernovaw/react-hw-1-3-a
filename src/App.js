import React from 'react';
import './App.css';
import Film from './Film';

export default function App() {
  return (
    <div className="App">
      <Film name="Star Wars: The Force Awakens"
        year="2015"
        genre="Space opera"
        rating="4"
        poster="/the-force-awakens-2015.jpg" />
      <Film name="Navalny"
        year="2022"
        genre="Documentary"
        rating="5"
        poster="/navalny-2022.webp" />
    </div>
  )
}
