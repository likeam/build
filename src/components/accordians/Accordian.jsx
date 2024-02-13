import React, { useState } from 'react'
import data from './data'
import './style.css';

export default function Accordian() {

  const [selected, setSelected] = useState('null');
  const [enableMultiSelction, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getItemId){
    setSelected(getItemId === selected ? null : getItemId);
  }


  return (
    <div className='acc-wrapper'>
      <button onClick={() => setEnableMultiSelection(!enableMultiSelction)}>Enable Multi Selction</button>
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
              <div className='acc-content'>{item.answer}</div>
              : null
            }
          </div>)
           : <div>No Data Found</div>
        }
      </div>
    </div>
  )
}
