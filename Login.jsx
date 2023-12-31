import React, { useState } from "react";
import "./Login.scss";


function Login() {
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  const [error,setError]=useState(null)
  const handleSubmit=(e)=>{
    e.preventDefault()
  }
  return (
    
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <label htmlFor="">Username</label>
        <input
          name="username"
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="">Password</label>
        <input
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {/* {error && error} */}
      </form>
    </div>
  );
}

export default Login;
