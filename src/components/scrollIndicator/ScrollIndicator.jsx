import React, { useEffect, useState } from 'react'
import './style.css';



export default function ScrollIndicator({url}) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMassage, setErrorMassage] = useState('');

    async function fetchData(getUrl) {
        try {
          setLoading(true);
          const response = await fetch(getUrl);
          const data = await response.json();
          console.log(data);
          if(data && data.products && data.products.length > 0){
            setData(data.products);
            setLoading(false)
          }
            
        } catch (error) {
            setErrorMassage(error.massage);
            
        }
    }


    useEffect(() => {
        fetch(url);
    }, [url])
  return (
    <div>
      <h1>Scroll Indicator</h1>
    </div>
  )
}
