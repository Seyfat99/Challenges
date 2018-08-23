import React, { Component } from "react";
import "./App.css";

import Name from "./Name/Name";
import Contact from "./Contact/Contact";

class App extends Component {
  state = {
    firstName: "Seyfat",
    lastName: "Khamidov",
    number: "704-819-1435",

    array: [
      { name: "Seyfat Khamidov", phone: "704-819-1435", id: 0 },
      { name: "Luis Quevedo", phone: "704-542-3335", id: 1 },
      { name: "Derik Solis", phone: "704-459-1565", id: 2},
      { name: "Horacio Hernandez", phone: "704-908-1235", id: 3 },
      { name: "Ivan Rosario", phone: "704-769-1455",id: 4}
    ],

    backcolor: "orange",
    message: "Pending"
  };
  
  handleClick = () => {

      this.setState({
        backcolor: "green",
        message: "Done"
      })
    // console.log(e.target.dataset.id);
  }

  render() {
    const { firstName, lastName, number, array, message,backcolor} = this.state;

    return (
      <div className="App">
        <Name firstName={firstName} />

        {/* <Contact firstName = {firstName} lastName = {lastName} number = {number} /> */}

        {array.map(({name, phone, id}) => {
          return (
            <div key= {id}>
              <Contact
              clicked = {this.handleClick}
              style = {{background: backcolor}}
              name={name}
              id={id}
              message={message}
              phone={phone} />
            </div>
          );
        })}

      </div>
    );
  }
}

export default App;
