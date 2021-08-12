import React, { useState, useEffect } from "react";
import "./App.css";
import Main from './Main'
import axios from 'axios'
import styled, { ThemeProvider } from 'styled-components';



function App() {
  const [image, setImage] = useState(null)
  const [caption, setCaption] = useState('')
  const [mainActive, setMainActive] = useState(false)
  useEffect(()=>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res=>{
      setImage(res.data.url)
      setCaption(res.data.explanation)
    })
    .catch(err=>{
      console.log(err);
    })
  },[])

  function openFunction(e){
    setMainActive(true);

  }



  const StyledTitle = styled.h1`
  color: black;
  font-size: 6rem;
  `
  
  const StyledButton = styled.button`
  width: 20%;
  height: 20%;
  background: black;
  color: white;
  font-size: 3rem;
  padding: 1rem;
  cursor: crosshair;
  margin-top: 20rem;
  transtion:.3s;
  &:hover{
    transform: rotate(-10deg);
    background: url('https://images.unsplash.com/photo-1543722530-d2c3201371e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1953&q=80);
  }
}
  `


  return (
    <div className="App">
      <StyledTitle>Nasa Photo of the Day</StyledTitle>
      {!mainActive && <StyledButton onClick={openFunction}>Get Picture Now!</StyledButton>}
      {mainActive && <Main caption={caption} image={image} />}
    </div>
  );
}

export default App;
