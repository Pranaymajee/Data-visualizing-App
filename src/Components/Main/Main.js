import React from 'react';
import Header from '../Header/Header';
import Tab from '../Tab/tab';
import Box from '@material-ui/core/Box';
import './main.css';


const main = () => {
  return (
    <div className='main_wrapper'>
        <Header/>
        <Tab/>
    </div>
  )
}

export default main