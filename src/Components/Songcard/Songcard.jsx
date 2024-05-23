import React from 'react'
import './Songcard.css'
import Albumimage from '../Album/Albumimage'
import Albuminfo from '../Album/Albuminfo'

function Songcard({album}) {
  
  return (
    <div className='songcard-body flex'>
      <Albumimage url={album?.images[0]?.url}  />
      <Albuminfo album={album}/>

    </div>
  )
}

export default Songcard