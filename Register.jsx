import React, { useState } from "react";
// import upload from "../../utils/upload";
import "./Register.scss";
// import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";

function Register() {
  const [file, setFile] = useState(null);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    occupation: "",
    address:"",

    isBusinessOwner: false
    
  });
  console.log(user);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSeller = (e) => {
    setUser((prev) => {
      return { ...prev, isSeller: e.target.checked };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = await upload(file);
    try {
      await newRequest.post("/auth/register", {
        ...user,
        img: url,
      });
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="register">
      <form >
        <div className="left">
          <h1>Create a new account</h1>
          <label htmlFor="">Username</label>
          <input
            name="username"
            type="text"
            placeholder="Username"
            onChange={handleChange}
          />
          <label htmlFor="">Email</label>
          <input
            name="email"
            type="email"
            placeholder="email"
            onChange={handleChange}
          />
          <label htmlFor="">Password</label>
          <input name="password" type="password" onChange={handleChange}/>
         
          <label htmlFor="">occupation</label>
          <input
            name="occupation"
            type="text"
            placeholder="student"
            onChange={handleChange}
          />
          <label htmlFor="">Address</label>
          <input
            name="address"
            type="text"
            placeholder="ethiopia"
            onChange={handleChange}
          />
          <button type="submit">Register</button>
        </div>
       
        
      </form>
      
    </div>
  );
}

export default Register;
