import React from 'react'
import MenuItems from './MenuItems'

export default function MenuList({list = []}) {
  return (
    <div className='menu-list-container'>
      {
        list && list.length ? 
        list.map((listitem) => <MenuItems item={(listitem)} /> ) 
        : null }
    </div>
  )
}
