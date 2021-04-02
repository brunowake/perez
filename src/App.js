import React from 'react'
import Body from './template/Body'
import './App.css';
import Menu from './template/Menu';
import Carousel from './components/carousel/Carousel';

function App() {
  document.addEventListener('scroll', () => {
    console.log('teste');
})


  return (
    <React.Fragment>
      <Menu />
      <Body />
    </React.Fragment>
  )
}

export default App;
