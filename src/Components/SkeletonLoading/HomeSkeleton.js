import React from 'react';
import Grid from '@material-ui/core/Grid';
import './homeSkeleton.css';

const HomeSkeleton = () => {
    return (
        <div className='wrapper'>
            <div className='sidebar'></div>
            <div className='main'>
                <div className='skeleton_header'>
                    <div className='skeleton_header_component1'></div>
                    <div className='skeleton_header_component2'></div>
                    <div className='skeleton_header_component3'></div>
                </div>
                <div className='skeleton_tab'>
                    <div className='skeleton_tab_component1'></div>
                    <div className='skeleton_tab_component2'></div>
                </div>
                <div className='grid'>
                    <Grid style={{padding: '2vh'}} container spacing={2}>
                        <Grid item xs={4}>
                            <div className='skeleton_grid_card'></div>
                        </Grid>
                        <Grid item xs={4}>
                            <div className='skeleton_grid_card'></div>
                        </Grid>
                        <Grid item xs={4}>
                            <div className='skeleton_grid_card'></div>
                        </Grid>
                        <Grid item xs={4}>
                            <div className='skeleton_grid_card'></div>
                        </Grid>
                        <Grid item xs={4}>
                            <div className='skeleton_grid_card'></div>
                        </Grid>
                        <Grid item xs={4}>
                            <div className='skeleton_grid_card'></div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default HomeSkeleton