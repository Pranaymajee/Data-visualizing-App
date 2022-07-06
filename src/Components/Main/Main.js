import React from 'react';
import Header from '../Header/Header';
import Tab from '../Tab/tab';
import GridCards from '../GridCards/GridCards';
import './main.css';
import { useSelector } from 'react-redux';

const Main = () => {

  const state = useSelector(state => state)
  return (
    <div className='main_wrapper'>
        <Header/>
        <Tab/>
        <GridCards data={state?.currentData} />
    </div>
  )
}

export default Main