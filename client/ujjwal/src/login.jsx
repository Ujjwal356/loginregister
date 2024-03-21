import react from 'react'
import './login.css'
import { useState } from 'react';
import { useNavigate} from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from 'axios'

function Login(){
  const [name,setName]=useState()
  const [password,setPassword]=useState()
  const navigate = useNavigate()
  // const [name,setName]=useState()

  const handleSubmit = (e) => {

    e.preventDefault();
    axios.post('http://localhost:3001/login', {name, password})
    .then(result => {
      console.log(result)
      if(result.data === "Success"){
        navigate("/home");
      }
      // Redirect the user to another page (e.g., login page) after successful signup
      // You can use the Link component for this purpose
       // Assuming you have access to the history object
    })
        .catch(err=> console.log(err))

    

  };


  return(
    <div>
        <section> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 

   <div className="signin"> 

    <div className="content"> 

     <h2>Sign In</h2> 

     <div className="form"> 
      <form onSubmit={handleSubmit}>
      <div className="inputBox"> 

       <input type="text" id="username" name="username" onChange={(e)=>setName(e.target.value)} required autoComplete="off"/> <i>Username</i> 

      </div> 

      <div className="inputBox"> 

       <input type="password" id="password" name="password" onChange={(e)=>setPassword(e.target.value)} required autoComplete="off"/> <i>Password</i> 

      </div> 

      <div className="links"> <a href="#">Forgot Password</a> <a href="/login">Signin</a> 

      </div> 
      
      <div className="inputBox"> 
        {/* <Link to="/register"> */}
          <button type="submit" className="form-control mt-4">SignIn</button>
        {/* </Link> */}

      </div> 
      </form>
     </div> 

    </div> 

   </div> 

  </section>
    
    </div>
  )
}

export default Login;