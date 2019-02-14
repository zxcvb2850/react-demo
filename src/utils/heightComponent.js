/**
 * 高阶组建
 * */
import React from "react";
import {userInfo} from "../api/user";
import {showToast} from "./common";

export function AuthRouter(MyComponent) {
  return class HOC extends React.Component {
    async componentDidMount() {
      const publicList = ['/login', '/register']
      const pathname = this.props.location.pathname;
      if (publicList.indexOf(pathname) > -1) {
        return null
      }
      let result = await userInfo();
      if (result.code !== 0) {
        showToast(result.msg, 'fail');
        this.props.history.push('/login')
      }
    }

    render() {
      return <MyComponent {...this.props}/>
    }
  }
}
