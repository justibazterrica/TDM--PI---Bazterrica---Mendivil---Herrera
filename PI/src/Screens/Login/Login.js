import React from 'react'
import Cookies from "universal-cookie";
import "./styles.css"

const cookies = new Cookies();

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            emaillog: "",
            passwordlog: "",
            
        }
    }
    
   Submit (evento){

      evento.preventDefault()

      const usersStorage = localStorage.getItem("users")

      if (usersStorage === null  || usersStorage.length == 0) {
        return ("Las creedencuales son invalidas")
      } else {
        
        let userParseado = JSON.parse(usersStorage)
        let usersFiltrado = userParseado.filter(user => user.email === this.state.emaillog)

      if (usersFiltrado.length > 0) {
        if(usersFiltrado[0].password === this.state.passwordlog){
          
          cookies.set("user-auth-cookie", this.state.emaillog)

          this.props.history.push(``);
        }

       } else{
          return("el usuario ingresado no existe")
      }
    
      }}
    

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

      
      <button onClick = {(event) => this.Submit(event)} > Log in </button>
      
      </section>

    )}

}

export default Login
