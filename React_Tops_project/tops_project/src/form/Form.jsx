import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Form.css'
/* eslint-disable jsx-a11y/anchor-is-valid */

function Form() {
  const [form,setForm] = useState({})
  const checkLogin = () => {
    console.log(form);
    fetch(`https://justjayapi.000webhostapp.com/login?username=${form.username}&password=${form.password}`).then((res)=>res.json()).then((response)=>{ console.log(response); })
  };
  return (
    <div className="main">
      <p className="sign" align="center">
        Sign in
      </p>
      <form className="form1">
        <input className="username" onChange={(e)=>{ setForm({...form,[e.target.name]:e.target.value}) }} type="text" name="username" placeholder="Username" />
        <input className="password" type="password" onChange={(e)=>{ setForm({...form,[e.target.name]:e.target.value}) }} name="password" placeholder="Password" />
        <a href="#" onClick={checkLogin} className="submit anchor" align="center">
          Sign in
        </a>
        { JSON.stringify(form)}
        <p className="forgot" align="center">
          <a href="/#">Forgot Password? </a>
        </p>
        <p className="text-center"><Link to="/register">Click here to create new account</Link></p>
      </form>
    </div>
  );
}

export default Form;