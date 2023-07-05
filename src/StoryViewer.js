import React, { useState,useEffect } from 'react';
import { Avatar, LinearProgress } from '@mui/material';
import img1 from './img/img1.jpg'
import img2 from './img/img2.jpg'
import img3 from './img/img3.jpg'
import img4 from './img/img4.jpg'
import leftImg from './img/left.png'
import rightImg from './img/right.png'
import play from './img/play-button-arrowhead.png'
import pause from './img/pause.png'
import mute from './img/mute.png'
import unmute from './img/volume.png'
import dot from './img/dots.png'
import './StoryViewer.css';
import topArrow from './img/arrowhead-up.png'
import Card from '@mui/joy/Card';






const stories = [
  { id: 1, user: img1, content: img1 , type: 'image', description: 'Nữ tính thế này sợ các bạn không nhận ra mình 😀😀', hastag:'abc'},
  { id: 2, user: img1, content: img2 , type: 'image', description: 'Day la caption cua anh so 2', hastag:'CuongDanChoi'},
  { id: 3, user: img1, content: img3 , type: 'image', description: 'This is the caption of third picture', hastag:'3rd'},
  { id: 4, user: img1, content: img4 , type: 'image', description: 'Ching-chong play ping-pong', hastag:'chinesedog'},
  // { id: 5, user: img1, content: video1 , type: 'video/mp4', description: 'Ching-chong play ping-pong', hastag:'chinesedog'},

  // ...
];

let storyArr = []
for(var i=0;i< stories.length;i++){
  storyArr.push(0)
}




const StoryViewer = () => {
  const [progress, setProgress] = useState(storyArr);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [isMute,setIsMute] = useState(true)

  const handleToggle = () => {
    setIsRunning(!isRunning);
  };
  const handleIsMute = () => {
    setIsMute(!isMute)
  }
  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          const updatedProgress = prevProgress.map((value, index) => {
            if (index === currentIndex) {
              if (value < 100) {
                return value + 1;
              } else {
                if (currentIndex !== progress.length - 1) {
                  setCurrentIndex(currentIndex + 1);
                }
                return value;
              }
            } else {
              if (index > currentIndex) {
                return 0;
              }
            }
            return value;
          });
          return updatedProgress;
        });
      }, 50);

      return () => {
        clearInterval(interval);
      };
    }
  }, [currentIndex, progress.length, isRunning]);

  const goToPreviousIndex = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
    setProgress((prevProgress) => {
      const updatedProgress = prevProgress.map((value, index) => {
        if (index >= currentIndex - 1) {
          return 0;
        }
        return value;
      });

      return updatedProgress;
    });
  };

  const goToNextIndex = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex < progress.length - 1 && progress[prevIndex] < 100) {
        setProgress((prevProgress) => {
          const updatedProgress = [...prevProgress];
          updatedProgress[prevIndex] = 100;
          return updatedProgress;
        });
      }
      return prevIndex + 1;
    });
  };
  const currentStory = stories[currentIndex];

  return (
    <div className='container'>


      <button className="left" onClick={goToPreviousIndex} disabled={currentIndex === 0}>
        <div className={`button-inside ${currentIndex === 0 ? 'hidden' : ''}`} style={{ float: 'right' }}>
          <svg 
            style={{ backgroundImage: `url(${leftImg})`, backgroundPosition: 'center', backgroundSize: '24px', height: '48px', width: '48px' }}
          ></svg>
        </div>
      </button>
      <div className='story-box'>
        <Card className="story-card" style={{ backgroundImage: `url(${currentStory.content})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className='progresses'>
            {progress.map((value, index) => (
              <LinearProgress
                key={index}
                variant="determinate"
                value={value}
                className="progress-bar"
              />))}
          </div>
          
  
          <div className='avatarDiv'>
            <div className='avatarDiv infor'>
              <Avatar src={currentStory.user} className="avatar" />
              <p style={{marginLeft:'10px',color:'white'}}><b style={{fontSize:"15px",fontFamily:"inherit"}}>Nguyễn Hữu Cường</b> <span style={{fontSize:'13px'}}>3 giờ</span></p>
            </div>
            <div  className='PlayButton'>
              <div onClick={handleToggle}  >
                <img src={isRunning ? pause : play} alt={isRunning ? 'Stop' : 'Start'} style={{height:'18px',width:"18px"}}/>   
              </div>
              <div onClick={handleIsMute} >
                <img src={isMute ? unmute : mute} alt={isMute ? 'Stop' : 'Start'} style={{height:'18px',width:"18px"}}/>
              </div>
              <div onClick={handleIsMute}>
                <img src={dot} alt='3dot'/>
              </div>
            </div>

          </div>
          <div className='description'>
              <p >{currentStory.description}</p>
              <p >{currentStory.hastag ? `#${currentStory.hastag}`:''}</p>
          </div>
        </Card>
        <div className='storyViewrs' style={{color:'white'}}>
              <img src={topArrow} alt='topArrow'></img>
              <div>
                <span style={{fontFamily:"Arial",fontSize:'17px',fontWeight:'bold'}}>80 người xem</span>
              </div>
              <div>
                <span style={{fontFamily:"Arial",height:'1px',display:'inline-block',borderBottom:'1px solid white', width:'100px'}}></span>
              </div>
        </div>

      </div>     

      <button className="right" onClick={goToNextIndex} disabled={currentIndex === progress.length - 1}>
        <div className={`button-inside ${currentIndex === progress.length - 1 ? 'hidden' : ''}`}>
          <svg 
            style={{ backgroundImage: `url(${rightImg})`, backgroundPosition: 'center', backgroundSize: '24px', height: '48px', width: '48px' }}
          ></svg>
        </div>     
      </button>
    </div>
  );
};

const App = () => {

  return (
      <StoryViewer />
  );
};

export default App;
