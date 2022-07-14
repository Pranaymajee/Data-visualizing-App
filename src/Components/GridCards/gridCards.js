import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import getData from '../../redux/action.js';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { changePage } from '../../redux/action';
import Chart from '../HighCharts/HighCharts.js'; 
import handShake from '../../images/handShake.svg';
import brokenHandShake from '../../images/brokenHandShake.svg';
import GridSkeleton from '../SkeletonLoading/GridSkeleton.js';
import './gridCards.css';
import { useEffect } from 'react';


// data contains the information for the 5 grid cards and upData contains the information for the 6th card
const GridCards = ({data, upData}) => { 

  const disableBack = React.useRef();
  const disableNext = React.useRef();

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  // On clicking Back Btn, API is called again with new page number as parameter 
  const backData = () =>{

    dispatch({type:"GRIDLOAD", payload:"false"})

    console.log(state.currentPage);
    dispatch(changePage(state.currentPage - 1));
    axios.post(`http://localhost:4000/getUserCallWorkbook.do?pageNumber=${state.currentPage - 1}&pageSize=5`).then(res => dispatch(getData(res.data.workbookItems)))

    if(state.currentPage == 0){
      disableBack.current.style.opacity = "0.5";
    }
    else{
      disableBack.current.style.opacity = "1";
    }

    setTimeout(() => {
      dispatch({type:"GRIDLOAD", payload:"true"})
    }, 1000);
  }

  useEffect(() => console.log("ecdbi"))
  
  useEffect(() => console.log("ecdbi"), [])

  // On clicking Next Btn, API is called again with new page number as parameter 
  const nextData = () =>{

    dispatch({type:"GRIDLOAD", payload:"false"})
    
    console.log(state.currentPage);
    dispatch(changePage(state.currentPage + 1));
    axios.post(`http://localhost:4000/getUserCallWorkbook.do?pageNumber=${state.currentPage + 1}&pageSize=5`).then(res => dispatch(getData(res.data.workbookItems)))

    if(state.currentPage == 2){
      disableNext.current.style.opacity = "0.5";
    }
    else{
      disableNext.current.style.opacity = "1";
    }

    setTimeout(() => {
      dispatch({type:"GRIDLOAD", payload:"true"})
    }, 1000);
  }

  console.log(data)
  return (
    <div className='grid_wrapper'>

      <Button onClick={backData} disabled={state.currentPage == 0} ref={disableBack} style={{minWidth: '6vh', minHeight: '6vh', borderRadius: '50%', background: '#5daae0', color: '#fff', opacity: "1"}} className='arrowLeft'><KeyboardArrowLeftIcon/></Button>
      <Button onClick={nextData} disabled={state.currentPage == 2} ref={disableNext} style={{minWidth: '6vh', minHeight: '6vh', borderRadius: '50%', background: '#5daae0', color: '#fff', opacity: "1"}} className='arrowRight'><KeyboardArrowRightIcon/></Button>

      {
        state.gridLoad === "true" ? (
          <Grid style={{padding: '2vh 2vh 0 2vh'}} container spacing={2}>
            {/* Mapping through 5 grid data */}
            {data.map((row)=>{
              return(
                <Grid item xs={4}>
                  <Paper style={{backgroundColor: '#2d404e', minHeight: '37vh', color: '#8c98a0', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                    <div className='cust_details'>
                      <Typography style={{marginLeft: '1.7vh', fontWeight: '600', fontSize: '2vh'}}>
                        {row?.customerName}
                      </Typography>
                      <Typography style={{marginRight: '1.7vh', color: '#8c98a0', fontWeight: '600', fontSize: '2vh'}}>
                        {row?.customerNumber}
                      </Typography>
                    </div>
                    <div className='chart_info'>
                      <Chart cardData={[row.totalCurrentOpenAmount,...row.pastDueBucketDocumentAmount]} bucketNames={["Curr Due",...row.bucketNames]} id={row.customerNumber} />
                      <div className='broken_promise_data'>
                        <Typography style={{fontSize: '2vh'}}>{row?.totalBrokenPromises}</Typography>
                        {
                          row?.totalBrokenPromises === 0 ? (
                            <img className="prom_img" src={handShake} alt="" />
                          ) : (
                            <img className="broken_prom_img" src={brokenHandShake} alt="" />
                          )
                        }
                        {
                          row?.totalBrokenPromises === 0 ? (
                            <p style={{textAlign: 'center', fontWeight: '600', fontSize: '2vh'}}>No Broken Promises</p>
                          ) : (
                            <p style={{textAlign: 'center', fontWeight: '600', fontSize: '2vh'}}>Broken Promises</p>
                          )
                        }
                      </div>
                    </div>
                  </Paper>
                </Grid>
              )
            })}

            <Grid item xs={4}>
              <Paper style={{backgroundColor: '#2d404e', minHeight: '37vh', color: '#8c98a0', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                <div className='cust_details'>
                  <Typography style={{marginLeft: '1.7vh', fontWeight: '600', fontSize: '2vh'}}>
                    REMAINING BALANCE SUMMARY
                  </Typography>
                </div>
                <div className='chart_info'>
                  <Chart cardData={[upData.upcomingPastDueAmount,...upData.upcomingPastDueBucketDocumentAmount]} id="11111111"
                    bucketNames={[
                      "Curr Due",
                      "1-30",
                      "31-60",
                      "61-90",
                      "91-180",
                      "181-360",
                      ">361",
                    ]}
                  />
                </div>
              </Paper>
            </Grid>
          </Grid>
        ) : (
          <GridSkeleton />
        )
      }
      
      
      <div className='footer'>
        <div className='footer_component1'>
          <Typography style={{fontSize: '2vh'}}>Viewing {state.currentPage*5+1} - {state.currentPage*5+5} of 15</Typography>
        </div>
        <div className='footer_component2'>
          <Typography style={{fontSize: '2vh'}}>©️ Copyright 2022 HighRadius. All rights Reserved.</Typography>
        </div>
      </div>
    </div>
  )
}

export default GridCards