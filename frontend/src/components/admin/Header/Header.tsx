import React from "react";
import "./Header.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
type Props = {}


const Header = (props: Props) => {
  return (
    <div>

<div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">VNVC</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Header