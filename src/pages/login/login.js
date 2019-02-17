/**
 * login page
 * */
import React from "react"
import {WingBlank, WhiteSpace, Button, List, InputItem} from "antd-mobile";
import {connect} from "react-redux";
import Logo from "../../component/logo/logo"
import {login} from "../../store/user";
import {Redirect} from "react-router-dom";

@connect(
  state => state.user,
  {login}
)
class Login extends React.Component {
  componentDidMount() {
    console.log('-------', this.props.user)
    if (this.props.user) {
      this.setState({user: this.props.user})
    }
  }

  constructor() {
    super()
    this.state = {
      user: '',
      pwd: ''
    }
  }

  handleRegister = () => {
    this.props.history.push('/register')
  }

  handleChange = (type, value) => {
    this.setState({
      [type]: value
    })
  }

  handleLogin = () => {
    this.props.login(this.state);
  }

  render() {
    return (
      <div>
        {this.props.redirectTo ? <Redirect to={this.props.redirectTo}/> : null}
        <Logo/>
        <h2>登陆页面</h2>
        <List>
          <InputItem
            value={this.state.user}
            onChange={v => this.handleChange('user', v)}
          >用户名</InputItem>
          <WhiteSpace/>
          <InputItem
            onChange={v => this.handleChange('pwd', v)}
            type='password'
          >密码</InputItem>
        </List>
        <WingBlank>
          <Button type='primary' size='small' onClick={this.handleLogin}>登陆</Button>
          <WhiteSpace/>
          <Button type='primary' size='small' onClick={this.handleRegister}>注册</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Login;
