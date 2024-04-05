import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch()
  const navigator = useNavigate()
  const logout = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigator('/login')
  }
  

  return (
    <div>
      <center>
      <h1 style={{ backgroundColor:"green",border:"1px solid green", fontSize:"70px"}}>Welcome</h1>
      <br/>
      <br/>
      
      <h1 style={{fontSize:"20px"}}> Click to Login</h1>
      <button style={{fontSize:"20px", border:"1px solid red", borderRadius:"2px"}}onClick={logout}>Login</button>
    
      </center>
    </div>
  );
};
export default Home;