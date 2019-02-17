import React from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux"
import {userInfo} from "../../api/user";
import {showToast} from "../../utils/common";
import {loadData} from "../../store/user"

@withRouter
@connect(null, {loadData})
class AuthRoute extends React.Component {
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
    } else {
      this.props.loadData(result)
    }
  }

  render() {
    return null
  }
}

export default AuthRoute;
