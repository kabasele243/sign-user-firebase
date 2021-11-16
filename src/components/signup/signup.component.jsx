import React, { useState} from 'react';
import { auth } from '../../firebase/firebase.utils';


function SignUp(){
  const [ data, setData] = useState({});
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    const {  email, password, confirmPassword } = data;

    if (password !== confirmPassword) {
      alert({password, confirmPassword});
      return;
    }

    try {
     await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      setData({ email: "", password: "", confirmPassword: ""})

    } catch (error) {
      console.error(error);
    }
  }

  const handleChange = (event) => {
    const { value, name} = event.target;

    setData({...data,...{[name]: value}})
  } 

  return(
    <div className='App'>
      <div></div>
      Sign Up
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" value={data.email} onChange={handleChange}/>
        <input type="password" name="password" placeholder="Password" value={data.password} onChange={handleChange}/>
        <input type="password" name="confirmPassword" placeholder="Confirm Password" value={data.confirmPassword} onChange={handleChange}/>
        <button>Sign Up</button>
      </form>
    </div>
  )
}

export default SignUp;