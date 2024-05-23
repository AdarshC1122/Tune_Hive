import React from 'react'
import './Queue.css'

function Queue({tracks, setCurrentIndex}) {
  return (
    <div className="queue-container flex">
      <div className="queue flex">
        <p className='upnext'>Up Next</p>
        <div className="queue-list">
          {
            tracks.map((track,index) => (
              <div className='queue-item flex' onClick={()=>setCurrentIndex(index)}>
                <p className='trackname'>{track?.track?.name}</p>
                <p>0:30</p>

              </div>

            ))
          }
        </div>

      </div>
    </div>
  )
}

export default Queue