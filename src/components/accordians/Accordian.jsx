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
  function handleMultiSelection(getItemId){
    let copyMulti = [...multiple];
    const findIndexOfCurrentId = copyMulti.indexOf(getItemId);

    console.log(findIndexOfCurrentId);
    if(findIndexOfCurrentId === -1) copyMulti.push(getItemId);
    else copyMulti.splice(findIndexOfCurrentId, 1);

    setMultiple(copyMulti);

  }


  return (
    <div className='acc-wrapper'>
      <button onClick={() => setEnableMultiSelection(!enableMultiSelction)}>Enable Multi Selction</button>
      <div className='accordian'>
        {
          data && data.length > 0 ? 
          data.map(item => <div className='item'>
            <div onClick = {enableMultiSelction ? () => handleMultiSelection(item.id) :() => handleSingleSelection(item.id)} className='title'>
              <h3>{item.question}</h3>
                <span>+</span>
            </div>
            { enableMultiSelction ?
              multiple.indexOf(item.id) !== -1 && ( <div className='acc-content'>{item.answer}</div> ) :
              selected === item.id  &&  (<div className='acc-content'>{item.answer}</div>)
            }
          </div>)
           : <div>No Data Found</div>
        }
      </div>
    </div>
  )
}
