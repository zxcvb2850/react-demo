/**
 * boss列表页面
 * */
import React from "react"
import {NavBar} from "antd-mobile"
import AvatarSelect from "../../component/avatarSelect/"

class BossInfo extends React.Component{

  render(){
    return (
      <div>
        <NavBar mode="dark">BOSS完善信息页</NavBar>
        <AvatarSelect />
      </div>
    )
  }
}

export default BossInfo