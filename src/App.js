import React from 'react'
import Accordian from './components/accordians/Accordian'
import RandomColor from './components/randomColor/RandomColor'
import StarRating from './components/star-rating/StarRating'
import ImageSlider from './components/imageSlider/ImageSlider'
import TreeView from './components/treeView/TreeView'
import QRCodeGenerator from './components/QRCodeGenerator/QRCodeGenerator'

const App = () => {
  return (
    <div>      
      <Accordian />
      <RandomColor />
      <StarRating  />
      <ImageSlider  url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"} />
     {/* <TreeView menus = {menus} />*/}
     <QRCodeGenerator />
    </div>
  )
}

export default App
