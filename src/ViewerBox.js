import React from "react";
import { Dialog, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import topArrow from './img/arrowhead-up.png'
import VisibilityIcon from '@mui/icons-material/Visibility';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

import LoadStory from "./SlideStory";
import EditBox from "./EditBox";


function ViewerBox() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        sx={{
          "& .MuiDialog-paper": {
            width: "485px", 
            height: "800px", 
            padding: '3px'
          }
        }}
      >
           <IconButton
              edge="end"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              sx={{
                position: "absolute",
                top: 20,
                right: 25
              }}
            >
              <CloseIcon />
            </IconButton>
        <DialogContent
          sx={{
            overflowX:'hidden'
          }}
        >

            <div style={{textAlign:'center', height:'20px'}}>
              <p style={{fontFamily:"Arial",fontSize:'17px',fontWeight:'bold'}}>Chiếc Quần Ngoài Xa</p>
            </div>
            <div>
              <span style={{fontFamily:"Arial",height:'1px',display:'inline-block',borderBottom:'1px solid black', width:'100%'}}></span>
            </div>
            <LoadStory/>
            <EditBox/>
            <div >
              <span style={{fontFamily:"Arial",height:'1px',display:'inline-block',borderBottom:'1px solid black', width:'100%'}}></span>
            </div>
            <div style={{display:'flex', marginTop:'10px', flexDirection:'row', opacity: '0.6'  }}>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <VisibilityIcon/>
                <span style={{fontFamily:"Arial", fontSize:"17px", textAlign:'left', display:'inline-block', marginLeft: '5px'}}><b>80 người xem</b></span>
                <span style={{fontFamily:"Arial", fontSize:'15px', color:'blue', marginLeft:'5px'}}>5 người xem mới</span>
              </div>
            </div>
            <div style={{display:'flex', marginTop:'10px', flexDirection:'row', opacity: '0.6' }}>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <div className="image-inside">
                  <PeopleAltIcon 
                    sx={{
                      height:'20px',
                      width:'20px',
                      margin:'auto'
                    }}
                  />
                </div>

                <span style={{fontFamily:"Arial", fontSize:"13px", textAlign:'left', display:'inline-block', paddingLeft: '5px'}}>Sau 14 ngày, bạn không thể nhìn thấy ai đã xem tin trừ khi họ bày tỏ cảm xúc về tin</span>
              </div>
            </div>

        </DialogContent>
      </Dialog>
        <div className='storyViewrs' style={{color:'white'}} onClick={handleClickOpen} >
          <img src={topArrow} alt='topArrow'></img>
          <div>
            <span style={{fontFamily:"Arial",fontSize:'17px',fontWeight:'bold'}}>80 người xem</span>
          </div>
          <div>
            <span style={{fontFamily:"Arial",height:'1px',display:'inline-block',borderBottom:'1px solid white', width:'100px'}}></span>
          </div>
      </div>

      </div>
  );
}

export default ViewerBox;
