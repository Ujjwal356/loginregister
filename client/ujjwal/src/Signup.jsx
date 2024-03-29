import React from 'react'
import './signup.css'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useState } from 'react';
import { useNavigate} from "react-router-dom";





const Signup = () => {
  const [name,setName]=useState()
  const [email,setemail]=useState()
  const [password,setPassword]=useState()
  const navigate = useNavigate()
   

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name, email, password)
    axios.post('http://localhost:3001/register', {name, email, password})
    .then(result => {
      console.log(result);
      // Redirect the user to another page (e.g., login page) after successful signup
      // You can use the Link component for this purpose
      navigate("/login"); // Assuming you have access to the history object
    })
        .catch(err=> console.log(err))

    

  };

  // console.log(name);

  return (
    <>
        <section> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 

   <div className="signin"> 

    <div className="content"> 

     <h2>Sign Up</h2> 

     <div className="form"> 
      <form onSubmit={handleSubmit}>
      <div className="inputBox"> 

       <input type="text" id="username" name="username" onChange={(e)=>setName(e.target.value)} required autoComplete="off"/> <i>Username</i> 

      </div> 

      <div className="inputBox"> 

<input type="email" id="email" name="email" onChange={(e)=>setemail(e.target.value)} required autoComplete="off"/> <i>email</i> 

</div> 

      

      <div className="inputBox"> 

       <input type="password" id="password" name="password" onChange={(e)=>setPassword(e.target.value)} required autoComplete="off"/> <i>Password</i> 

      </div> 

      <div className="links"> <a href="#">Forgot Password</a> <a href="/login">Signin</a> 

      </div> 
      
      <div className="inputBox"> 
        {/* <Link to="/register"> */}
          <button type="submit" className="form-control mt-4">SignUp</button>
        {/* </Link> */}

      </div> 
      </form>
     </div> 

    </div> 

   </div> 

  </section>
    </>
  )
}

export default Signup