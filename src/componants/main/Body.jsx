import React from 'react'
import './body.css'
import { assets } from '../../assets/assets'

const Body = () => {
  return (
    <div className="main">
    <div className="nav">
      <p>Chat Bot</p>
      <img src={assets.user_icon} alt="" />
    </div>
    <div className="main_container">
      <div className="greet">
        <p><span>Hi. User</span></p>
        <p>How can i help you toDay</p>
      </div>
      <div className="cards">
        <div className="card">
          <p>Suggest me some beautiful places for visiting in month of sept</p>
          <img src={assets.compass_icon} alt="" />
        </div>
        <div className="card">
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ea.</p>
          <img src={assets.bulb_icon} alt="" />
        </div>
        <div className="card">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, tempora!</p>
          <img src={assets.message_icon} alt="" />
        </div>
        <div className="card">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, totam.</p>
          <img src={assets.code_icon} alt="" />
        </div>
      </div>
      <div className="main-bottom">
        <div className="search-box">
          <input type="text "placeholder='Enter the query here' />
          <div>
            <img src={assets.gallery_icon} alt="" />
            <img src={assets.mic_icon} alt="" />
            <img src={assets.send_icon} alt="" />
          </div>
        </div>
        <p className="bottom-info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptate placeat nihil perferendis sit quae!
        </p>
      </div>
    </div>
   </div>
  )
}

export default Body
