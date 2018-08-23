import React from "react";

const contact = ({ firstName, lastName, number, name, phone, clicked, style, message, id}) => {
    
  return (
    <div className="contact-container">
      {/* <p>You need to contact {firstName} {lastName} at {number}</p> */}
      <p className="firstP">You need to contact {name} at {phone}</p>
      <p className="icon" id={id} style = {style}>{message}</p>
      <button id={id} onClick = {clicked}>Call Me</button>
    </div>
  );
};

export default contact;
