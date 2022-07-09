import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import getData from '../../redux/action.js';
import getUpcommingData from '../../redux/action.js';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { changePage } from '../../redux/action';
import Chart from '../HighCharts.js'; 
import handShake from '../../images/handShake.svg';
import brokenHandShake from '../../images/brokenHandShake.svg';
import './gridCards.css';



const GridCards = ({data, upData}) => {

  

  const disableBack = React.useRef();
  const disableNext = React.useRef();

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const backData = () =>{

    console.log(state.currentPage);
    dispatch(changePage(state.currentPage - 1));
    axios.post(`http://localhost:4000/getUserCallWorkbook.do?pageNumber=${state.currentPage - 1}&pageSize=5`).then(res => dispatch(getData(res.data.workbookItems)))
    // axios.post(`http://localhost:4000/getUpcomingSummary.do?pageNumber=${state.currentPage - 1}&pageSize=5`).then(res => dispatch(getUpcommingData(res.data)))

    if(state.currentPage == 0){
      disableBack.current.style.opacity = "0.5";
    }
    else{
      disableBack.current.style.opacity = "1";
    }
  }

  const nextData = () =>{

    console.log(state.currentPage);
    dispatch(changePage(state.currentPage + 1));
    axios.post(`http://localhost:4000/getUserCallWorkbook.do?pageNumber=${state.currentPage + 1}&pageSize=5`).then(res => dispatch(getData(res.data.workbookItems)))
    // axios.post(`http://localhost:4000/getUpcomingSummary.do?pageNumber=${state.currentPage + 1}&pageSize=5`).then(res => dispatch(getUpcommingData(res.data)))

    if(state.currentPage == 2){
      disableNext.current.style.opacity = "0.5";
    }
    else{
      disableNext.current.style.opacity = "1";
    }
  }

  console.log(data)
  return (
    <div className='grid_wrapper'>

      <Button onClick={backData} disabled={state.currentPage == 0} ref={disableBack} style={{minWidth: '40px', minHeight: '40px', borderRadius: '50%', background: '#5daae0', color: '#fff', opacity: "0.5"}} className='arrowLeft'><KeyboardArrowLeftIcon/></Button>
      <Button onClick={nextData} disabled={state.currentPage == 2} ref={disableNext} style={{minWidth: '40px', minHeight: '40px', borderRadius: '50%', background: '#5daae0', color: '#fff', opacity: "1"}} className='arrowRight'><KeyboardArrowRightIcon/></Button>

      <Grid style={{padding: '1rem'}} container spacing={2}>

        {data.map((row)=>{
          return(
            <Grid item xs={4}>
              <Paper style={{backgroundColor: '#2d404e', minHeight: '275px', color: '#8c98a0', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                <div className='cust_details'>
                  <Typography style={{marginLeft: '0.7rem', fontWeight: '600'}}>

                    {row?.customerName}

                  </Typography>
                  <Typography style={{marginRight: '0.7rem', color: '#8c98a0', fontWeight: '600'}}>

                    {row?.customerNumber}

                  </Typography>
                </div>
                <div className='chart_info'>
                  <Chart cardData={row.pastDueBucketDocumentAmount} bucketNames={row.bucketNames} id={row.customerNumber} />
                  <div className='broken_promise_data'>
                    <Typography>{row?.totalBrokenPromises}</Typography>
                    <br />
                    {
                      row?.totalBrokenPromises === 0 ? (
                        <img style={{transform: 'scale(0.8)'}} src={handShake} alt="" />
                      ) : (
                        <img style={{transform: 'scale(0.8)'}} src={brokenHandShake} alt="" />
                      )
                    }
                    <br />
                    {
                      row?.totalBrokenPromises === 0 ? (
                        <p style={{textAlign: 'center'}}>No Broken Priomises</p>
                      ) : (
                        <p style={{textAlign: 'center'}}>Broken Priomises</p>
                      )
                    }
                  </div>
                </div>
              </Paper>
            </Grid>
          )
        })}

        <Grid item xs={4}>
          <Paper style={{backgroundColor: '#2d404e', minHeight: '275px', color: '#8c98a0', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <div className='cust_details'>
              <Typography style={{marginLeft: '0.7rem', fontWeight: '600'}}>
                REMAINING BALANCE SUMMARY
              </Typography>
            </div>
            <div className='chart_info'>
              <Chart cardData={upData.upcomingPastDueBucketDocumentAmount} id="11111111"
                bucketNames={[
                  "1-30",
                  "31-60",
                  "61-90",
                  "91-180",
                  "181-360",
                  ">361",
                ]} />
            </div>
          </Paper>
        </Grid>
        
      </Grid>

    </div>
  )
}

export default GridCards