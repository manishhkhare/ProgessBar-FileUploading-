import React, { useState } from 'react'
import axios  from 'axios';
import ProgressBar from './ProgressBar';

export default function LoginForm() {
  const[data,setData] = useState({
    email:'',
    password:''
});
const[user,setUser] =useState({
    user:null,
    is_loggdin:false
})
  
let handlechange = (e) => {
 
   if(e.target.classList.contains("username")){
    setData({
      ...data,
     email:e.target.value
   })
   }else if(e.target.classList.contains("password")){
   
    setData({
      ...data,
     password:e.target.value
   })
   }
  
   
  }
 try {
   
  var loginForm = async(information) => { 
    information.preventDefault();
    console.log(data);
    
    
    let  upload  = await axios.post("http://localhost:1337/api/stus",{
      "data": {
        "email":data.email,
        "password":data.password
      }
      
    }
)
     console.log(upload);
     if(upload.status === 200){
      setUser({
        ...user,
        is_loggdin:true
       
      })

     }
     localStorage.setItem("user",JSON.stringify(upload));    
    
   
  }
     
 } catch (error) { 
  console.log(error);
  
 }

  return ( 
    <>
   <form onSubmit={ (information)=> { loginForm(information) }}>
    <div className= ' p-5 m-5 border'>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control username" onChange={ (e)=>{ handlechange(e) } } id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control password" onChange={ (e)=>{ handlechange(e) } } id="exampleInputPassword1" />
  </div>
  <button type="submit" className="btn btn-primary" >Submit</button>
  </div>
</form>


  {
  user.is_loggdin > 0 &&
   <ProgressBar/>
}</>)
}
