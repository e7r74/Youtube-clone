import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import youtube_icon_icon from '../../assets/youtube_icon.png'
import menu_icon from '../../assets/menu.png'
import search_icon from '../../assets/search.png'
import upload_ican from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/user_profile.jpg'

const Navbar = ({ setSidebar }) => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img className="menu-icon" onClick={() => setSidebar((prev) => !prev)} src={menu_icon} alt="" />
        <Link to="/">
          <img className="loga" src={youtube_icon_icon} alt="" />
        </Link>
      </div>
      <div className="nav-midl flex-div">
        <div className="search-box flex-dev">
          <input className="search" type="text" placeholder="Search" />
          <img className="search_icon" src={search_icon} alt="" />
        </div>
      </div>
      <div className="nav-right flex-div">
        <img src={upload_ican} alt="" />
        <img src={more_icon} alt="" />
        <img src={notification_icon} alt="" />
        <img src={profile_icon} className="profile_icon" alt="" />
      </div>
    </nav>
  )
}

export default Navbar
