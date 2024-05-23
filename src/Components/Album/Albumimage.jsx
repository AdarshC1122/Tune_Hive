import React from 'react'
import './Albumimage.css'


function Albumimage({ url }) {
  


    return (
            
        <div className="albumimage flex">
        <img src={url} alt="album art" className="albumimage-art" />
        <div className="albumimage-shadow">
          <img src={url} alt="shadow" className="albumimage-shadow" />
        </div>
      </div>
        
    )
}

export default Albumimage

