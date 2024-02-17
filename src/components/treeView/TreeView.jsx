import React from 'react'
import MenuList from './MenuList'

export default function TreeView({menu = []}) {
  return (
    <div>
        <MenuList list = {menu}/ >
    </div>
  )
}
