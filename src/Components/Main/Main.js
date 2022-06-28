import React from 'react';
import Header from '../Header/Header';
import Tab from '../Tab/tab';
import GridCards from '../GridCards/gridCards';
import './main.css';


const main = () => {
  return (
    <div className='main_wrapper'>
        <Header/>
        <Tab/>
        <GridCards/>
    </div>
  )
}

export default main