import React from 'react'
import { Chat } from './Chat'
import { Routes, Route } from "react-router-dom";
import LandingPage from './LandingPage';
import Profile from './Profile';
import Suggested from './Suggested';

function Index() {
  return (
    <div> 
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route> 
        <Route path='/chat' element={<Chat/>}/>
        <Route path='/profile' element={<Profile/>}></Route>
       <Route path='/suggeted' element={<Suggested/>}></Route>
      </Routes>
       
      
    </div>
  )
}

export default Index