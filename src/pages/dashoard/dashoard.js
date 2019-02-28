import React from "react"
import { connect } from "react-redux"
import { NavBar } from "antd-mobile"
import { Switch, Route } from "react-router-dom"
import BossIndex from "../boss/index"
import GeniusIndex from "../genius/index"
import NavLinkBar from "../../component/navlink/navlink"
import "./dashoard.less"

const Msg = () => (<h2>MsgIndex</h2>)
const User = () => (<h2>UserIndex</h2>)

@connect(state => state.user, null)
class Dashoard extends React.Component {

	render() {
		const { pathname } = this.props.location
		const type = this.props.type
		const navList = [{
			path: '/boss',
			text: '牛人',
			icon: 'boss',
			title: '牛人列表',
			component: BossIndex,
			hide: type === 'genius'
		}, {
			path: '/genius',
			text: 'BOSS',
			icon: 'genius',
			title: 'BOSS列表',
			component: GeniusIndex,
			hide: type === 'boss'
		}, {
			path: '/msg',
			text: '消息',
			icon: 'msg',
			title: '消息列表',
			component: Msg
		}, {
			path: '/me',
			text: '我的',
			icon: 'user',
			title: '个人中心',
			component: User
		}]
		return (
			<>
				<NavBar mode='dard' className={"fixd-header"}>{navList.find(v => v.path === pathname).title}</NavBar>
				<div style={{ marginTop: 45 }}>
					<Switch>
						{navList.map(v => (<Route key={v.path} path={v.path} component={v.component} />))}
					</Switch>
				</div>
				<NavLinkBar data={navList}></NavLinkBar>
			</>
		)
	}
}

export default Dashoard