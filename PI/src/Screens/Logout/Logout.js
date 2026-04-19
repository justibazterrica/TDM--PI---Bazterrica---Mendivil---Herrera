import React, { Component } from 'react'
import Cookies from "universal-cookie"

const cookies = new Cookies()

export default class Logout extends Component {
      constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            
        }
    }
    logout () {
        cookies.remove("user-auth-cookie");
        this.setState({ email: "", password: "" });
    }
  render() {
    return (
      <div>
        <button onClick={() => this.logout()}>Logout</button>
      </div>
    )
  }
}
