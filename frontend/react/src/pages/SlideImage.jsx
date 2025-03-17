import React from 'react'

import "./SlideImage.css"

const SlideImage = ({data}) => {
 

  return (
    <div className='slide'>   
      {data.map((item,index)=>{
       return <img src={item.src} alt={item.alt} key={index}className='slideimage'></img>
      })}
      
    </div>
  
  )
  
}

export default SlideImage
