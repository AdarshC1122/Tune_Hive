import React, { useEffect, useState } from 'react'
import './Player.css'
import { useLocation } from 'react-router-dom'
import apiClient from '../../Spotify'
import Songcard from '../../Components/Songcard/Songcard'
import Queue from '../../Components/Queue/Queue'
import Audioplayer from '../../Components/Audio/Audioplayer'


function Player() {
  
  const location = useLocation();
  const [tracks, setTrack] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (location.state) {
      apiClient
        .get("playlists/" + location.state?.id + "/tracks")
        .then((res) => {
          setTrack(res.data.items);
          setCurrentTrack(res.data?.items[0]?.track);
        });
    }
  }, [location.state]);

  useEffect(() => {
    setCurrentTrack(tracks[currentIndex]?.track);
  }, [currentIndex, tracks]);


  return (
    <div  className='screen-contanier flex'>
      <div className='left-player-body'>
        <Audioplayer currentTrack={currentTrack}
         total={tracks}
         currentIndex={currentIndex}
         setCurrentIndex={setCurrentIndex}/>
      </div>
      <div className='right-player-body'>
      <Songcard album={currentTrack?.album}/>
      <Queue tracks={tracks} setCurrentIndex={setCurrentIndex}/>
      </div>
    </div>
  )
}

export default Player