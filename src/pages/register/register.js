/**
 * login page
 * */
import React from "react"
import {WhiteSpace, List, InputItem, Radio, Button} from "antd-mobile";
import Logo from "../../component/logo/logo";

class Register extends React.Component {
  constructor() {
    super()
    this.state = {
      user: '',
      pwd: '',
      repeatpwd: '',
      type: 'genius',
    }
  }

  handleChange = (type, value) => {
    this.setState({
      [type]: value
    })
  }

  handleRegister = () => {
    console.log(this.state);
  }

  render() {
    const RadioItem = Radio.RadioItem
    return (
      <div>
        <Logo/>
        <h2>注册页面</h2>
        <List>
          <InputItem
            onChange={v => this.handleChange('user', v)}
          >用户名</InputItem>
          <WhiteSpace/>
          <InputItem
            type='password'
            onChange={v => this.handleChange('pwd', v)}
          >密码</InputItem>
          <WhiteSpace/>
          <InputItem
            type='password'
            onChange={v => this.handleChange('repeatpwd', v)}
          >确认密码</InputItem>
          <WhiteSpace/>
          <RadioItem
            checked={this.state.type === 'genius'}
            onChange={() => {
              this.handleChange('type', 'genius')
            }}
          >牛人</RadioItem>
          <RadioItem
            checked={this.state.type === 'boss'}
            onChange={() => {
              this.handleChange('type', 'boss')
            }}
          >BOSS</RadioItem>
          <WhiteSpace/>
          <Button type='primary' onClick={this.handleRegister}>注册</Button>
        </List>
      </div>
    )
  }
}

export default Register;
