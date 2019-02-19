import React from "react"
import {connect} from "react-redux"
import {NavBar} from "antd-mobile"
import BossIndex from "../boss/index"
import GeniusIndex from "../genius/index"
import NavLinkBar from "../../component/navlink/navlink"

const Msg = ()=>(<h2>MsgIndex</h2>)
const User = ()=>(<h2>UserIndex</h2>)

@connect(state=>state.user, null)
class Dashoard extends React.Component{

	render(){
		const {pathname} = this.props.location
		const user = this.props.user
		const navList = [{
			path: '/boss',
			text: '牛人',
			icon: 'boss',
			title: '牛人列表',
			component: BossIndex,
			hide: user.type === 'genius'
		},{
			path: '/genius',
			text: 'BOSS',
			icon: 'genius',
			title: 'BOSS列表',
			component: GeniusIndex,
			hide: user.type === 'boss'
		},{
			path: '/msg',
			text: '消息',
			icon: 'msg',
			title: '消息列表',
			component: Msg
		},{
			path: '/me',
			text: '我的',
			icon: 'user',
			title: '个人中心',
			component: User
		}]
		return (
			<div>
				<NavBar mode='dard'>{navList.find(v=>v.path = pathname).title}</NavBar>
				<NavLinkBar data={navList}></NavLinkBar>
			</div>
			)
	}
}

export default Dashoard