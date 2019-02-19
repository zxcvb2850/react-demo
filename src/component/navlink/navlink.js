/* tabbar */
import React from "react"
import PropTyeps from "prop-types"
import {TabBar} from "antd-mobile"

class NavLink extends React.Component{
	static proptyeps={
		data: PropTyeps.array.isRequired
	}

	render(){
		const navList = this.props.data.filter(v=>!v.hide)

		return (
			<TabBar>
				{navList.map(v=>(
					<TabBar.Item
						key={v.path}
						title={v.text}
					></TabBar.Item>
					))}
			</TabBar>
			)
	}
}

export default NavLink