import React, { Component } from 'react'
import Cookies from "universal-cookie"
import "./Logout.css";

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
        this.props.history.push("/");
    }
  render() {
    return (
      <section className='logout'>
        <button onClick={() => this.logout()} >Logout</button>
      </section>
    )
  }
}
