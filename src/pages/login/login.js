/**
 * login page
 * */
import React from "react"
import {WingBlank, WhiteSpace, Button, List, InputItem} from "antd-mobile";
import Logo from "../../component/logo/logo"

class Login extends React.Component {
  handleRegister = () => {
    this.props.history.push('/register')
  }

  render() {
    return (
      <div>
        <Logo/>
        <h2>登陆页面</h2>
        <List>
          <InputItem>用户名</InputItem>
          <WhiteSpace/>
          <InputItem>密码</InputItem>
        </List>
        <WingBlank>
          <Button type='primary' size='small'>登陆</Button>
          <WhiteSpace/>
          <Button type='primary' size='small' onClick={this.handleRegister}>注册</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Login;
