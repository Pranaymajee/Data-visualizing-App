import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Typography from '@material-ui/core/Typography';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import './gridSkeleton.css';

const GridSkeleton = () => {

    const gridArray = [1,2,3,4,5,6];

    return (
        <div className='gridSkeleton_wrapper'>
            <Button style={{minWidth: '40px', minHeight: '40px', borderRadius: '50%', background: '#5daae0', color: '#fff', opacity: "1"}} className='arrowLeft'><KeyboardArrowLeftIcon/></Button>
            <Button style={{minWidth: '40px', minHeight: '40px', borderRadius: '50%', background: '#5daae0', color: '#fff', opacity: "1"}} className='arrowRight'><KeyboardArrowRightIcon/></Button>
            <Grid style={{padding: '1rem 1rem 0 1rem'}} container spacing={2}>
                {gridArray.map((index)=>{
                    return(
                    <Grid item xs={4}>
                        <Paper style={{backgroundColor: '#2d404e', minHeight: '275px', color: '#8c98a0', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                            <div className='skeleton_cust_details'>
                                <div className='skeleton_cust_component1'>
                                    {/* <div className='shine'>s</div> */}
                                </div>
                                <div className='skeleton_cust_component2'></div>
                            </div>
                            <div className='skeleton_chart_info'>
                                <div className='skeleton_chart_component1'>
                                    <AutorenewIcon className='skeleton_loader'/>
                                    <Typography style={{marginTop: '0.5rem'}}>
                                        Loading...
                                    </Typography>
                                </div>
                                <div className='skeleton_chart_component2'>
                                    
                                </div>
                            </div>
                        </Paper>
                    </Grid>
                    )
                })}                
            </Grid>
        </div>
    )
}

export default GridSkeleton