import React, { useState } from 'react'
import './Sidebar.css'
import SidebarButton from './SidebarButton'
import { MdFavorite } from "react-icons/md";
import { MdSpaceDashboard } from "react-icons/md";
import { FaGripfire} from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { useEffect } from 'react';
import apiClient from '../../Spotify';
function Sidebar() {
  const[image,setImage]=useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST8BFLy7pFC8Rt--lD8fJPltAQ0tTp-nfJCFKNmeOIsw&s")

useEffect(()=>{
apiClient.get("me").then((response)=>{
  setImage(response.data.images[0].url);
})


},[])


  return (
    <div className='sidebar-container'>
    <img src={image} className='profile-image' alt="profile" />
    <div>
      <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />}/>
      <SidebarButton title="Trending" to="/trending" icon={<FaGripfire/>}/>
      <SidebarButton title="Player" to="/player" icon={<FaPlay/>}/>
      <SidebarButton title="Favorites" to="/favorites" icon={<MdFavorite/>}/>
      <SidebarButton title="Library" to="/" icon={<IoLibrary />}/>
    </div>
    <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt/>}/>


    </div>
  )
}

export default Sidebar