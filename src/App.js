import React from 'react';

import './App.css'
import Sign from './components/signin/signin.component';
import SignUp from './components/signup/signup.component';


function App(){


  return(
    <div className='App'>
      <Sign/>
      <SignUp/>
    </div>
  )
}

export default App;