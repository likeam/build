import React, { useState } from 'react'
import data from './data'

export default function Accordian() {

  const [selected, setSelected] = useState('null');

  function handleSingleSelection(getItemId){
    setSelected(getItemId === selected ? null : getItemId);
  }


  return (
    <div className='wrapper'>
      <div className='accordian'>
        {
          data && data.length > 0 ? 
          data.map(item => <div className='item'>
            <div onClick = {() => handleSingleSelection(item.id)} className='title'>
              <h3>{item.question}</h3>
                <span>+</span>
            </div>
            {
              selected === item.id ?
              <div className='content'>{item.answer}</div>
              : null
            }
          </div>)
           : <div>No Data Found</div>
        }
      </div>
    </div>
  )
}
