/* tabbar */
import React from "react"
import PropTyeps from "prop-types"
import { withRouter } from "react-router-dom"
import { TabBar } from "antd-mobile"

@withRouter
class NavLink extends React.Component {
	static proptyeps = {
		data: PropTyeps.array.isRequired
	}

	render() {
		const navList = this.props.data.filter(v => !v.hide)
		console.log(navList)
		const { pathname } = this.props.location

		return (
			<TabBar tabBarPosition="bottom">
				{navList.map(v => (
					<TabBar.Item
						key={v.path}
						title={v.text}
						icon={{ uri: require(`../../assets/resource/tab/${v.icon}.png`) }}
						selectedIcon={{ uri: require(`../../assets/resource/tab/${v.icon}-active.png`) }}
						selected={pathname === v.path}
						onPress={() => {
							this.props.history.push(v.path)
						}}
					></TabBar.Item>
				))}
			</TabBar>
		)
	}
}

export default NavLink