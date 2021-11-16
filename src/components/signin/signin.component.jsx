import React, { useState} from 'react';
import { auth } from '../../firebase/firebase.utils';


function Sign(){
  const [ data, setData] = useState({});
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = data;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setData({ email: '', password: '' });
      console.log('Youre Sign!')
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (event) => {
    const { value, name} = event.target;

    setData({...data,...{[name]: value}})
  } 

  return(
    <div className='App'>
      <div></div>
      Sign In
      <form onSubmit={handleSubmit}>
        <input type="email" name="email"  placeholder="email" value={data.email} onChange={handleChange}/>
        <input type="password" name="password" placeholder="password" value={data.password} onChange={handleChange}/>
        <button>Sign In</button>
      </form>
    </div>
  )
}

export default Sign;