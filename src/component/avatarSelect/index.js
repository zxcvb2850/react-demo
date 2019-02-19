/**
 * 头像选择组件
 * */
import React from "react"
import {Grid, List} from "antd-mobile";
import PropTypes from "prop-types";

class AvatarSelect extends React.Component {
  static propTypes = {
    selectAvatar:PropTypes.func.isRequired 
  }
  state = {}

  render() {
    const avatarList = ['boy', 'girl', 'man', 'woman', 'bull', 'chick', 'crab', 'hedgehog', 'hippopo', 'koala', 'lemur', 'pig', 'tiger', 'whale', 'zebra']
      .map(v => ({
        icon: require(`../../assets/resource/avatars/${v}.png`),
        text: v
      }))

    const gridHeader = this.state.icon
      ? (<div>
        <span>已选择头像</span>
        <img style={{width: 20}} src={this.state.icon} alt="已选头像"/>
      </div>)
      : '请选择头像';

    return (
      <div>
        <h5>头像选择</h5>
        <List renderHeader={() => gridHeader}>
          <Grid
            data={avatarList}
            columnNum={5}
            onClick={ele => {
              this.setState(ele)
              this.props.selectAvatar(ele.text)
            }}
          />
        </List>
      </div>
    )
  }
}

export default AvatarSelect