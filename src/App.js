import React from 'react'
import Accordian from './components/accordians/Accordian'
import RandomColor from './components/randomColor/RandomColor'
import StarRating from './components/star-rating/StarRating'
import ImageSlider from './components/imageSlider/ImageSlider'
import QRCodeGenerator from './components/QRCodeGenerator/QRCodeGenerator'
import Themes from './components/thems/Themes'
import ScrollIndicator from './components/scrollIndicator/ScrollIndicator'
const App = () => {
  return (
    <div>      
      <Accordian />
      <RandomColor />
      <StarRating  />
      {/*<ImageSlider  url={"https://picsum.photos/v2/list"} >*/}
        page={"1"}
        limit={"10"} />
     {/* <TreeView menus = {menus} />*/}
     <QRCodeGenerator />
     <Themes />
     <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
     
    </div>
  )
}

export default App
