import React from 'react'
import Cookies from "universal-cookie";
import "./styles.css"

const cookies = new Cookies();

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            
        }
    }

    
    evitarSubmit = (evento) => {
        evento.preventDefault()

        


        this.props.history.push(``);
    }

    render() {

    return (

      <section>

      <h1>Log in: </h1>

      <form> 
        <label> Email: </label>
        <input className = "inpute"/>
      </form>

      <form> 
        <label> Password: </label>
        <input className= "inputp" /> 
      </form>

      <button onClick = {(event) => this.evitarSubmit(event)} > Log in </button>
      </section>

    )}

}

export default Login
