import { menuIcon, logoIcon, searchIcon, cameraIcon, viewIcon, bellIcon, dotsMenuIcon, profileImage } from '../images';

import { Icon } from "./Icon"

function Header() {
  return (
    <header>
      <div className="header__menu flex">
        <Icon type="icon" iconClass="header__menu-burger only1920" source={menuIcon} alternative="burger menu" iconWidth="20px" iconHeight="17px" />
        <Icon type="logo" iconClass="header__menu-logo" source={logoIcon} alternative="logo home" />
      </div>
      <div className="header__search">
        <label htmlFor="video-search"></label>
        <input type="text" name="search" id="video-search" className="only1920" placeholder="Search" />
        <Icon type="icon" iconClass="header__search-submit" source={searchIcon} alternative="search submit" iconWidth="19px" iconHeight="19px" />
      </div>
      <div className="header__options header__options-channel flex only1920">
        <Icon type="icon" iconClass="header__options-camera" source={cameraIcon} alternative="camera" iconWidth="27px" iconHeight="20px" />
        <Icon type="icon" iconClass="header__options-view" source={viewIcon} alternative="change video grid" iconWidth="21px" iconHeight="21px" />
        <Icon type="bell" iconClass="header__options-notifications" extraClass="header__options-notifications-amount" source={bellIcon} alternative="notifications" iconWidth="22px" iconHeight="26px" />
        <Icon type="profile" iconClass="header__options-profile" source={profileImage} alternative="your profile photo" />
      </div>
      <div className="header__options-phone">
        <img src={dotsMenuIcon} alt="options" />
      </div>
    </header>
  )
}

export default Header
