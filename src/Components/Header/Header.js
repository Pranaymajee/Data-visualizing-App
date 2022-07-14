import React from 'react';
import Freeda from '../../images/freeda.svg';
import ar1 from '../../images/ar1.svg';
import ar2 from '../../images/ar2.svg';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FilledInput } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import './header.css';


const useStyles = makeStyles(theme => ({
    root: {
      height: "4.7vh",
      width: "17vw",
      borderRadius: "20px 20px 20px 20px"
    },
    textField: {
        border: "1px solid #5daae0"
    }
    
}));

const Header = () => {

    const classes = useStyles();

    return (
        <div className='header_wrapper'>
            <Box className='header_component1'>
                <Button style={{minWidth: '7vh', minHeight: '7vh'}} className='header_back_btn'>
                    <i class="fas fa-arrow-left" ></i>
                </Button>
                <Typography style={{color:"#5daae0", fontSize:"3vh", marginLeft: '5px'}}>
                    Call Workboard
                </Typography>
            </Box>
            <Box className='autonomous'>
                <img style={{width: '0.5rem', marginRight: '4px'}} src={ar1} alt="" />
                <Typography style={{color:"#fff", fontSize:"0.7rem"}}>
                    AUTONOMOUS RECEIVABLES
                </Typography>
                <img style={{width: '0.5rem', marginLeft: '4px'}} src={ar2} alt="" />
            </Box>
            <Box className='header_component2'>
            <FilledInput
                style={{display: "flex", justifyContent: "center", color: '#fff', paddingBottom: '1rem'}}
                placeholder='Search Name'
                className={classes.textField}
                variant="filled"
                classes={{
                root: classes.root
                }}
                startAdornment={
                    <InputAdornment style={{transform: 'scale(1.36)', marginLeft: '-7px', marginRight: '11px', padding: '0', paddingTop: '11.56px'}} position="start">
                      <SearchIcon style={{color: '#fff', minHeight: '1rem', minWidth: '1rem', backgroundColor: '#5daae0', borderRadius: '50%', padding: '3px'}}/>
                    </InputAdornment>
                }
                disableUnderline
            />
                <Button style={{borderRadius: '20px', margin: "0 1rem 0 1rem"}} className='freeda'>
                    <Typography style={{color:"#fff", fontSize:"0.8rem",marginRight: '5px', marginLeft: '5px'}}>FREEDA</Typography>
                    <img style={{width: '2.1rem', marginLeft: '0px'}} src={Freeda} alt="" />
                </Button>
            </Box>
        </div>
    )
}

export default Header;