import React, { useEffect, useState } from 'react'

export default function RandomColor() {

    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000');

    function randomColorUtility(length) {
        return Math.floor(Math.random() * length);
      }

    function handleCreateRandomColorHEX(){
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColor = "#";
        for(let i = 0; i < 6; i++){
            hexColor += hex[randomColorUtility(hex.length)]
        }
        setColor(hexColor);

    }

    function handleCreateRandomColorRGB(){
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);

        setColor(`rgb(${r}, ${g}, ${b})`);
    }

    useEffect(()=>{
        if(typeOfColor === 'rgb') handleCreateRandomColorRGB();
        else handleCreateRandomColorHEX();
    }, [typeOfColor] );

  return (
    <div style={{width:'100vw', height: '100vh', background: color }}>
        <button 
            onClick={() => setTypeOfColor('hex')}
            style={{margin: '50px', padding: '4px', borderRadius: '4px', backgroundColor: 'lightblue'}}>
            Create HEX Colors
        </button>
        <button 
            onClick={() => setTypeOfColor('rgb')}
            style={{margin: '50px', padding: '4px', borderRadius: '4px', backgroundColor: 'lightyellow'}}>
            Create RGB Colors
        </button>
        <button 
            onClick={typeOfColor === 'hex' ?  handleCreateRandomColorHEX : handleCreateRandomColorRGB }
            style={{margin: '50px', padding: '4px', borderRadius: '4px', backgroundColor: 'lightgreen'}}>
            Genrate the Random Color
        </button>
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
    </div>
  )
}
