import React from 'react';
import './header.css';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FilledInput } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles = makeStyles(theme => ({
    root: {
      height: "35px",
      width: "200px",
      borderRadius: "20px 20px 20px 20px"
    },
    
}));

const Header = () => {

    const classes = useStyles();

    return (
        <div className='header_wrapper'>
            <Box className='header_component1'>
                <Button style={{minWidth: '50px', minHeight: '50px'}} className='header_back_btn'>
                    <i class="fas fa-arrow-left" ></i>
                </Button>
                <Typography style={{color:"#5daae0", fontSize:"1.3rem"}}>
                    Call Workboard
                </Typography>
            </Box>
            <Box className='autonomous'>
                <Typography style={{color:"#fff", fontSize:"0.7rem"}}>
                    AUTONOMOUS RECEIVABLES
                </Typography>
            </Box>
            <Box className='header_component2'>
            <FilledInput
                sx={{display: "flex", justifyContent: "center"}}
                placeholder='Search Name'
                className={classes.textField}
                variant="filled"
                classes={{
                root: classes.root
                }}
                startAdornment={
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                }
                disableUnderline
            />
                <div className='freeda'>

                </div>
            </Box>
        </div>
    )
}

export default Header;