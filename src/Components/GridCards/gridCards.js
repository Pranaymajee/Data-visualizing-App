import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import './gridCards.css';



const gridCards = () => {


  return (
    <div className='grid_wrapper'>

      <Button style={{minWidth: '40px', minHeight: '40px', borderRadius: '50%', background: '#5daae0', color: '#fff'}} className='arrowLeft'><KeyboardArrowLeftIcon/></Button>
      <Button style={{minWidth: '40px', minHeight: '40px', borderRadius: '50%', background: '#5daae0', color: '#fff'}} className='arrowRight'><KeyboardArrowRightIcon/></Button>


      <Grid style={{padding: '1rem'}} container spacing={2}>

        <Grid item xs={4}>
          <Paper style={{backgroundColor: '#2d404e', minHeight: '275px', color: '#8c98a0', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}} className='cust_details'>
              <Typography style={{marginLeft: '0.7rem', fontWeight: '600'}}>
                Adidas Inc.
              </Typography>
              <Typography style={{marginRight: '0.7rem', color: '#8c98a0', fontWeight: '600'}}>
                1905548
              </Typography>
            </div>
            <div style={{minHeight: '240px', minWidth: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}} className='chart_info'>
              HighCharts
            </div>
          </Paper>
        </Grid>

        <Grid item xs={4}>
          <Paper style={{backgroundColor: '#2d404e', minHeight: '275px', color: '#8c98a0', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}} className='cust_details'>
              <Typography style={{marginLeft: '0.7rem', fontWeight: '600'}}>
                Adidas Inc.
              </Typography>
              <Typography style={{marginRight: '0.7rem', color: '#8c98a0', fontWeight: '600'}}>
                1905548
              </Typography>
            </div>
            <div style={{minHeight: '240px', minWidth: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}} className='chart_info'>
              HighCharts
            </div>
          </Paper>
        </Grid>

        <Grid item xs={4}>
          <Paper style={{backgroundColor: '#2d404e', minHeight: '275px', color: '#8c98a0', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}} className='cust_details'>
              <Typography style={{marginLeft: '0.7rem', fontWeight: '600'}}>
                Adidas Inc.
              </Typography>
              <Typography style={{marginRight: '0.7rem', color: '#8c98a0', fontWeight: '600'}}>
                1905548
              </Typography>
            </div>
            <div style={{minHeight: '240px', minWidth: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}} className='chart_info'>
              HighCharts
            </div>
          </Paper>
        </Grid>

        <Grid item xs={4}>
          <Paper style={{backgroundColor: '#2d404e', minHeight: '275px', color: '#8c98a0', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}} className='cust_details'>
              <Typography style={{marginLeft: '0.7rem', fontWeight: '600'}}>
                Adidas Inc.
              </Typography>
              <Typography style={{marginRight: '0.7rem', color: '#8c98a0', fontWeight: '600'}}>
                1905548
              </Typography>
            </div>
            <div style={{minHeight: '240px', minWidth: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}} className='chart_info'>
              HighCharts
            </div>
          </Paper>
        </Grid>

        <Grid item xs={4}>
          <Paper style={{backgroundColor: '#2d404e', minHeight: '275px', color: '#8c98a0', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}} className='cust_details'>
              <Typography style={{marginLeft: '0.7rem', fontWeight: '600'}}>
                Adidas Inc.
              </Typography>
              <Typography style={{marginRight: '0.7rem', color: '#8c98a0', fontWeight: '600'}}>
                1905548
              </Typography>
            </div>
            <div style={{minHeight: '240px', minWidth: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}} className='chart_info'>
              HighCharts
            </div>
          </Paper>
        </Grid>

        <Grid item xs={4}>
          <Paper style={{backgroundColor: '#2d404e', minHeight: '275px', color: '#8c98a0', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}} className='cust_details'>
              <Typography style={{marginLeft: '0.7rem', fontWeight: '600'}}>
                Adidas Inc.
              </Typography>
              <Typography style={{marginRight: '0.7rem', color: '#8c98a0', fontWeight: '600'}}>
                1905548
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

export default gridCards