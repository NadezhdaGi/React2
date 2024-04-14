import React from 'react';
import './App.css';
import Header from './Components/Header';
import Heroes from './Components/Heroes';
import image1 from './img/image1.jpeg';
import image2 from './img/image2.jpeg';
import image3 from './img/image3.jpeg';

function App() {
  return (
    <React.Fragment>
    <Header/>
    <Heroes 
     imgLink={image1}
     name="Супермен"
     description="борец за справедливость"
     />
     <Heroes 
     imgLink={image3}
     name="Бэтмен"
     description="борец с преступностью, филантроп, миллиардер"
     />
     <Heroes 
     imgLink={image2}
     name="Железный человек"
     description="гений, миллиардер, плейбой, филантроп"
     />
    </React.Fragment>
  );
}

export default App;
