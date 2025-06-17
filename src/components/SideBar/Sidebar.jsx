import React from 'react';
import { assets } from '../../assets/assets'; // Assuming this is how you access assets

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className='top'>
        <img src={assets.menu_icon} alt="" />
        <div className="new-chat">
            <img src={assets.plus_icon} alt="" />
            <p>New Chat</p>
        </div>
      </div>
      <div className="bottom">
        
      </div>
    </div>
  );
};

export default Sidebar;
