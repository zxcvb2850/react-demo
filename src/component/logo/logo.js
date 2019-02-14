/**
 * logo component
 * */
import React from "react";
import './logo.less';

const Logo = () => (
  <div className='logo-container'>
    <img className='logo-icon' src={require("../../assets/resource/common/logo.png")} alt="logo"/>
  </div>
)

export default Logo;
