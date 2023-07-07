import React, {useEffect, useState, useRef} from 'react';
import img1 from './img/img1.jpg'
import img2 from './img/img2.jpg'
import img3 from './img/img3.jpg'
import img4 from './img/img4.jpg'
import img5 from './img/im5g5.jpg'

const images = [
  { id: 1, user: img1, content: img1 , type: 'image', description: 'Nữ tính thế này sợ các bạn không nhận ra mình 😀😀', hastag:'abc'},
  { id: 2, user: img1, content: img2 , type: 'image', description: 'Day la caption cua anh so 2', hastag:'CuongDanChoi'},
  { id: 3, user: img1, content: img5 , type: 'video', description: 'This is video but it still error', hastag: 'error'},
  { id: 4, user: img1, content: img3 , type: 'image', description: 'This is the caption of third picture', hastag:'3rd'},
  { id: 5, user: img1, content: img4 , type: 'image', description: 'Ching-chong play ping-pong', hastag:'chinesedog'},
];

const LoadStory = () => {
    const [selectedItem, setSelectedItem] = useState(0);
    const carouselContainerRef = useRef(null);
    const initialContainerLeftPositionRef = useRef(null);
    const handleItemClick = (index) => {
        setSelectedItem(index); 
    };

    useEffect(() => {
        const carouselContainer = carouselContainerRef.current;
        const carouselItems = carouselContainer.querySelectorAll('.carouselItem');
    
        const selectedItemLeftPosition = carouselItems[selectedItem].offsetLeft;
        const carouselContainerLeftPosition = carouselContainer.offsetLeft;
    
        const translateX = carouselContainerLeftPosition - selectedItemLeftPosition - 10;
        carouselContainer.style.transform = `translateX(${translateX}px)`;
    
        if (selectedItem === 0) {
          carouselContainer.style.transform = `translateX(0)`;
        }
      }, [selectedItem]);
    
      useEffect(() => {
        const carouselContainer = carouselContainerRef.current;
        initialContainerLeftPositionRef.current = carouselContainer.offsetLeft;
    
        carouselContainer.style.transition = 'transform 0.3s ease';
      }, []);


  return (
    <div className="myCarousel" ref={carouselContainerRef}>
      {images.map((image, index) => (
        <div
        key={index}
        onClick={() => handleItemClick(index)}
        className={`carouselItem ${index === selectedItem ? 'selected' : ''}`}
        
      >
          <img src={image.content} alt={image.hashtag} />
          {index === selectedItem && <div className="underline" />}
        </div>
      ))}
    </div>
  );
};

export default LoadStory;
