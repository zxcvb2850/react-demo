/**
 * boss列表页面
 * */
import React from "react"
import {connect} from "react-redux"
import {Button, InputItem, NavBar, TextareaItem} from "antd-mobile"
import AvatarSelect from "../../component/avatarSelect/"
import {update} from "../../store/user"
import {Redirect} from "react-router-dom";

@connect(state => state.user, {update})
class BossInfo extends React.Component {

  constructor() {
    super()
    this.state = {
      title:'',
      desc:'',
      company: '',
      money:'',
    }
  }

  handleChange = (type, val) => {
    this.setState({[type]: val})
  }

  selectAvatar = (val) => {
    console.log(val)
    this.setState({icon: val})
  }

  render() {
    const path = this.props.location.pathname
    const redirect = this.props.redirectTo
    return (
      <div>
        {redirect && redirect !== path ? <Redirect to={this.props.redirectTo}/> : null}
        <NavBar mode="dark">BOSS完善信息页</NavBar>
        <AvatarSelect selectAvatar={this.selectAvatar}/>
        <InputItem onChange={v => this.handleChange('title', v)}>招聘职位</InputItem>
        <InputItem onChange={v => this.handleChange('company', v)}>公司名称</InputItem>
        <InputItem onChange={v => this.handleChange('money', v)}>职位薪资</InputItem>
        <TextareaItem
          autoHeight
          onChange={v => this.handleChange('desc', v)}
          rows={3}
          title='职位要求'
        />
        <Button
          onClick={() => this.props.update(this.state)}
          type={'primary'}
        >提交</Button>
      </div>
    )
  }
}

export default BossInfo