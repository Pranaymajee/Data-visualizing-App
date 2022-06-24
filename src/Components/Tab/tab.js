import React from 'react';
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import './tab.css';

const useStyles = makeStyles(theme => ({
    root: {
        color: "#fff"
    },
}));

function TabInfo() {

    const classes = useStyles();

    const [value, setValue] = React.useState(2);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className='tab_wrapper'>
            <Box className='tab_component1'>
                <Box>
                    <Tabs
                        className={classes.root}
                        value={value}
                        indicatorColor="primary"
                        onChange={handleChange}
                        aria-label="disabled tabs example"
                        TabIndicatorProps={{style: {background:'#fff'}}}
                    >
                        <Tab
                        className={classes.root} 
                        label="TO CALL LIST (12)" 
                        />
                        <Tab 
                        className={classes.root} 
                        label="FINISHED CALL LIST (12)" 
                        />
                    </Tabs>
                </Box>
            </Box>

            <Box className='tab_component2'>
                <Box style={{borderRight: '1px solid #636363'}} className='tab_info'>
                    <p style={{color: '#fff', fontSize: '20px'}}>10<span style={{color: '#919191'}}>/</span><span style={{color: '#919191', fontSize: '15px'}}>30</span></p>
                    <p style={{color: '#5daae0', fontSize: '12px'}}>Total Customers Called</p>
                </Box>
                <Box style={{borderRight: '1px solid #636363'}} className='tab_info'>
                    <p style={{color: '#fff', fontSize: '20px'}}>2<span style={{color: '#fff', fontSize: '15px'}}>hr </span>2<span style={{color: '#fff', fontSize: '15px'}}>min</span><span style={{color: '#919191'}}>/</span><span style={{color: '#919191', fontSize: '15px'}}>4hr</span></p>
                    <p style={{color: '#5daae0', fontSize: '12px'}}>Total Time Spent on Call</p>
                </Box>
                <Box className='tab_info'>
                    <p style={{color: '#fff', fontSize: '20px'}}>$290<span style={{color: '#919191'}}>/</span><span style={{color: '#919191', fontSize: '15px'}}>$945M</span></p>
                    <p style={{color: '#5daae0', fontSize: '12px'}}>Total Past Due Touched</p>
                </Box>
            </Box>
        </div>
    )
}

export default TabInfo