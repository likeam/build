import React, { useState } from 'react'
import {FaStar} from 'react-icons/fa';
import './style.css';

export default function StarRating({noOfStars = 5}) {
    
    const [rating, setRating] = useState(0);
    const [hovering, setHovering] = useState(0);

 
    function handleClick(getCurrentIndex) {
        setRating(getCurrentIndex);
    }

    function handleMouseEnter(getCurrentIndex)  {
        setHovering(getCurrentIndex);
    }

    function handleMouseLeave(getCurrentIndex){
        setHovering(rating);
    }

  return (
    <div className='star-rating'>
        {
            [...Array(noOfStars)].map((_, index) =>{
                index += 1;
                return (
                    <FaStar
                        className={index <= (hovering || rating) ? "active" : "inactive"}
                        key = {index}
                        onClick = {() => handleClick(index)}
                        onMouseMove={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave()}
                        size = {40}                    
                    />
                );
            })
        }
    </div>
  )
}
