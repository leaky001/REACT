
import './App.css'
import React from 'react'
import Button from './Button'
import {Profile, User} from './profile'

const App = () => {
  return (
    <div>
    <div className='inputcont app'>
      <label>Deatils:</label>
      <input type="text" placeholder='input your details and click the button'/>
      <Button/>
      
    </div>

    <Content/>
    <Profile/>
    <User/>


    </div>
   
    
    
  )
}

export default App
