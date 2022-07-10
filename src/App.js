import { useDispatch,useSelector } from 'react-redux';
import Drawer from './Components/Drawer/Drawer';
import Main from './Components/Main/Main';
import HomeSkeleton from './Components/SkeletonLoading/HomeSkeleton';
import {useEffect} from 'react';
import getData from './redux/action.js';
import getUpcommingData from './redux/action.js';
import axios from 'axios';
import { changePage } from './redux/action';
import './App.css';


function App() {

  const dispatch = useDispatch()
  const state = useSelector(state => state)

  useEffect(() => {
    dispatch(changePage(0))
    dispatch({type:"DATALOAD", payload:"false"})
    //API calls
    axios.post(`http://localhost:4000/getUserCallWorkbook.do?pageNumber=${0}&pageSize=5`).then(res => dispatch(getData(res.data.workbookItems)))
    axios.post(`http://localhost:4000/getUserCallWorkbook.do?pageNumber=${0}&pageSize=5`).then(res => dispatch({type:"OVERVIEW",payload:res.data.overview}))
    axios.post(`http://localhost:4000/getUpcomingSummary.do?pageNumber=${0}&pageSize=5`).then(res => dispatch({type:"UPCOMMING",payload:res.data}))
    //Displaying the data after certain amount of time by changing the payload to true which was initially set to false in reducer.js
    setTimeout(() => {
      dispatch({type:"DATALOAD", payload:"true"})
    }, 1500);
  }, [])
  

  return state.dataLoad === "true" ? (
    <div>
      <div style={{width:'100%', display:'flex', flexWrap:'nowrap'}}>
        <Drawer/>
        <Main/>
      </div>
    </div>
  ) : (
    <div>
      <div style={{width:'100%'}}>
        <HomeSkeleton/> 
      </div>
    </div>
  ) 
}


export default App;
