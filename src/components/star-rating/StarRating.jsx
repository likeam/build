import React from 'react'
import {FaSrar} from 'react-icons/fa';

export default function StarRating({noOfStars = 5}) {
  return (
    <div className='star-rating'>
        {
            [...Array(noOfStars)].map((_, index) =>{
                index += 1;
                return <FaSrar
                    key = {index}
                    onClick={() => handleClick(index)}
                    onMouseMove={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave()}
                    size = {40}                    
                 />
            })
        }
    </div>
  )
}
