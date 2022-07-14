import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import './drawer.css';

export default function TemporaryDrawer() {

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const disableBack = React.useRef();

  return (

    <div>
      <Box className='navbar'>
        <Button
          style={{minWidth: "7vh", minHeight: "7vh", borderBottom:"1px solid #dfdfdf", borderRadius:"0px"}}
          className='menu_icon'
          onClick={() => {
            setIsDrawerOpen(true);
            disableBack.current.style.opacity = "1";
            disableBack.current.style.pointerEvents = "auto";
          }}
        >
          <i class="fas fa-bars"></i>
        </Button>

        <Button 
          style={{minWidth: "7vh", minHeight: "7vh"}}
          className='user_icon'
        >
          <i class="fas fa-user-circle"></i>
        </Button>

        <Drawer
        className='drawer_box'
        anchor='left' open={isDrawerOpen}
        onClose={ () => setIsDrawerOpen(false)}
        >
          <Box className='menu_drawer'>
            <div className='drawer_text_menu'>
              <Button
                style={{minWidth: '7vh', minHeight: "7vh", borderBottom: "none"}}
                className='menu_icon'
                onClick={() => {
                setIsDrawerOpen(true);
                disableBack.current.style.opacity = "1";
                disableBack.current.style.pointerEvents = "auto";}}
              >
                <i class="fas fa-bars"></i>
              </Button>
              <p>MENU</p>
            </div>
            <div className='drawer_text_back'>
              <Button
                style={{minWidth: '7vh', minHeight: "7vh"}}
                className='back_icon'
                onClick={() => {
                  setIsDrawerOpen(false); 
                  disableBack.current.style.opacity = "0";
                  disableBack.current.style.pointerEvents = "none";
                }}>
                  <i class="fas fa-arrow-left" ></i>
              </Button>
              <p className=''>Switch Back to Enterprise UI</p>
            </div>
            
            <div className='login_box'>
              <Button
              style={{minWidth: '7vh', minHeight: "7vh"}}
              className='drawer_user_icon'
              >
                <i class="fas fa-user-circle"></i>
              </Button>
              <p className='user_name'>Pranay Majee</p>
              <Button className="login_btn" style={{color: "#fff", fontSize:'0.7rem', background:"#2b4250", borderRadius:"30px", marginRight:"0.7rem", paddingLeft:"1.2rem", paddingRight:"1.2rem"}}>
                LOGOUT
              </Button>
            </div>
          </Box> 
        </Drawer>
      </Box>
    </div>

  );
}
