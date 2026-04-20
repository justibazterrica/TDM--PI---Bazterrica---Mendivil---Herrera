import React from 'react'
import Cookies from "universal-cookie";
import "./styles.css"
import {withRouter} from "react-router-dom";

const cookies = new Cookies();

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            emaillog: "",
            passwordlog: "",
            error:""
        }
    }
    
   onSubmit (evento){

      evento.preventDefault()

      const usersStorage = localStorage.getItem("Usuarios")

      if (usersStorage === null  || usersStorage.length == 0) {
         this.setState({ error: "Las credenciales son inválidas" });
         return;
      } else {
        
        let userParseado = JSON.parse(usersStorage)
        let usersFiltrado = userParseado.filter(user => user.email === this.state.emaillog)

      if (usersFiltrado.length > 0) {
        if(usersFiltrado[0].password === this.state.passwordlog){
          
          cookies.set("user-auth-cookie", this.state.emaillog)

          this.props.history.push("/");
        } else { this.setState({ error: "Contraseña incorrecta" })}

       } 
     
      }}

    render() {

    return (

      <section>

      <h1>Log in: </h1>


      <form onSubmit = {(event) => this.onSubmit(event)} > 

        <label> Email: </label>
        <input className="inpute" value={this.state.emaillog} onChange={(e) => this.setState({ emaillog: e.target.value })}/>

      
        <label> Password: </label>
        <input className="inputp" type="password" value={this.state.passwordlog} onChange={(e) => this.setState({ passwordlog: e.target.value })}/>


        <button type="submit" > Log in </button>
      
      </form>

     <p>{this.state.error}</p>

      </section>

    )}

}

export default withRouter (Login);
