import React, { useState } from "react";

function Form() {
  const [user,setUser] = useState({
    firstName:'John',
    lastName:'Sylvia',
    active:false});

  function handleUserDataChange(event) {
    let value = event.target.value;
    if(event.target.type === 'checkbox'){
       value = event.target.checked; 
    }
    setUser(user=>{
      return {...user,[event.target.name]:value}
    })
  }

  function handleSubmit(event){
    event.preventDefault();
    console.log('The form has been submitted')
    setUser(user=>{
      for (const key in user){
      user[key]='';
      }
      console.log(user)
      return user;
    })

  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name='firstName' onChange={handleUserDataChange} value={user.firstName} />
      <input type="text" name='lastName' onChange={handleUserDataChange} value={user.lastName} />
      <input type="checkbox" name="active" onChange={handleUserDataChange} checked={user.active}      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
