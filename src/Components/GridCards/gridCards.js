import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import './gridCards.css';
import getData from '../../redux/action.js';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { changePage } from '../../redux/action';



const GridCards = ({data}) => {

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const backData = () =>{
    dispatch(changePage(state.currentPage - 1));
    console.log(state.currentPage);
    axios.post(`http://localhost:4000/getUserCallWorkbook.do?pageNumber=${state.currentPage-1}&pageSize=5`).then(res =>dispatch(getData(res.data.workbookItems)))
  }

  const nextData = () =>{
    dispatch(changePage(state.currentPage + 1));
    console.log(state.currentPage);
    axios.post(`http://localhost:4000/getUserCallWorkbook.do?pageNumber=${state.currentPage+1}&pageSize=5`).then(res =>dispatch(getData(res.data.workbookItems)))
  }

console.log(data)
  return (
    <div className='grid_wrapper'>

      <Button onClick={backData} style={{minWidth: '40px', minHeight: '40px', borderRadius: '50%', background: '#5daae0', color: '#fff'}} className='arrowLeft'><KeyboardArrowLeftIcon/></Button>
      <Button onClick={nextData} style={{minWidth: '40px', minHeight: '40px', borderRadius: '50%', background: '#5daae0', color: '#fff'}} className='arrowRight'><KeyboardArrowRightIcon/></Button>


      <Grid style={{padding: '1rem'}} container spacing={2}>

        {data.map((row)=>{
          return(
            <Grid item xs={4}>
                  <Paper style={{backgroundColor: '#2d404e', minHeight: '275px', color: '#8c98a0', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}} className='cust_details'>
                      <Typography style={{marginLeft: '0.7rem', fontWeight: '600'}}>
                          {row?.customerName}
                      </Typography>
                      <Typography style={{marginRight: '0.7rem', color: '#8c98a0', fontWeight: '600'}}>
                      {row?.customerNumber}
                      </Typography>
                    </div>
                    <div style={{minHeight: '240px', minWidth: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}} className='chart_info'>
                      HighCharts
                    </div>
                  </Paper>
                </Grid>
          )
        })}

        <Grid item xs={4}>
          <Paper style={{backgroundColor: '#2d404e', minHeight: '275px', color: '#8c98a0', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}} className='cust_details'>
              <Typography style={{marginLeft: '0.7rem', fontWeight: '600'}}>
                REMAINING BALANCE SUMMARY
              </Typography>
            </div>
            <div style={{minHeight: '240px', minWidth: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}} className='chart_info'>
              HighCharts
            </div>
          </Paper>
        </Grid>
        
      </Grid>

    </div>
  )
}

export default GridCards