import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import styled from 'styled-components'

export default function ButtonSliders() {
  const [flag, setflag] = useState(false);
  const buttonSlides = useRef(null);
  function handleNext() {
    buttonSlides.current.scrollBy(250, 0);
    setflag(true);
  }
  function handlePrev() {
    buttonSlides.current.scrollBy(-250, 0);
    setflag(false)
  }
  return (
      <Container className='d-flex gap-3'>
          <LeftPart className='d-flex gap-2'>
           <button className='outline-0 border border-1 border-dark bg-white py-1 px-2 fs-5 rounded-5 flex-shrink-0'>Dates</button>   
           <button className='outline-0 border border-1 border-dark bg-white py-1 px-3 fs-5 rounded-5 flex-shrink-0'>Group Size</button>   
           <button className='outline-0 border border-1 border-dark bg-white py-1 px-3 fs-5 rounded-5 flex-shrink-0'>More filters</button>   
          </LeftPart>
          {flag &&
              <img src="https://cdn-icons-png.flaticon.com/512/318/318276.png" alt="error" width={'30px'} onClick={handlePrev} />}

          <RightPart className='d-flex gap-3' ref={buttonSlides}>
           <button className='outline-0 border-0 py-sm-1 py-0 px-3 fs-5 rounded-sm-5 rounded-4 flex-shrink-0'>Hello</button>   
           <button className='outline-0 border-0 py-sm-1 py-0 px-3 fs-5 rounded-sm-5 rounded-4 flex-shrink-0'>Hello</button>   
           <button className='outline-0 border-0 py-sm-1 py-0 px-3 fs-5 rounded-sm-5 rounded-4 flex-shrink-0'>Hello</button>   
           <button className='outline-0 border-0 py-sm-1 py-0 px-3 fs-5 rounded-sm-5 rounded-4 flex-shrink-0'>Hello</button>   
           <button className='outline-0 border-0 py-sm-1 py-0 px-3 fs-5 rounded-sm-5 rounded-4 flex-shrink-0'>Hello</button>   
           <button className='outline-0 border-0 py-sm-1 py-0 px-3 fs-5 rounded-sm-5 rounded-4 flex-shrink-0'>Hello</button>   
           <button className='outline-0 border-0 py-sm-1 py-0 px-3 fs-5 rounded-sm-5 rounded-4 flex-shrink-0'>Hello</button>   
           <button className='outline-0 border-0 py-sm-1 py-0 px-3 fs-5 rounded-sm-5 rounded-4 flex-shrink-0'>Hello</button>   
           <button className='outline-0 border-0 py-sm-1 py-0 px-3 fs-5 rounded-sm-5 rounded-4 flex-shrink-0'>Hello</button>   
           <button className='outline-0 border-0 py-sm-1 py-0 px-3 fs-5 rounded-sm-5 rounded-4 flex-shrink-0'>Hello</button>   
           <button className='outline-0 border-0 py-sm-1 py-0 px-3 fs-5 rounded-sm-5 rounded-4 flex-shrink-0'>Hello</button>   
           <button className='outline-0 border-0 py-sm-1 py-0 px-3 fs-5 rounded-sm-5 rounded-4 flex-shrink-0'>Hello</button>   
           <button className='outline-0 border-0 py-sm-1 py-0 px-3 fs-5 rounded-sm-5 rounded-4 flex-shrink-0'>Hello</button>   
           <button className='outline-0 border-0 py-sm-1 py-0 px-3 fs-5 rounded-sm-5 rounded-4 flex-shrink-0'>Hello</button>   
           <button className='outline-0 border-0 py-sm-1 py-0 px-3 fs-5 rounded-sm-5 rounded-4 flex-shrink-0'>Hello</button>   
           <button className='outline-0 border-0 py-sm-1 py-0 px-3 fs-5 rounded-sm-5 rounded-4 flex-shrink-0'>Hello</button>   
           <button className='outline-0 border-0 py-sm-1 py-0 px-3 fs-5 rounded-sm-5 rounded-4 flex-shrink-0'>Hello</button>   
           <button className='outline-0 border-0 py-sm-1 py-0 px-3 fs-5 rounded-sm-5 rounded-4 flex-shrink-0'>Hello</button>   
           <button className='outline-0 border-0 py-sm-1 py-0 px-3 fs-5 rounded-sm-5 rounded-4 flex-shrink-0'>Hello</button>   
           
           
              
          </RightPart>
          <img src="https://cdn-icons-png.flaticon.com/512/467/467152.png" alt="error" width={'30px'} onClick={handleNext} />

    </Container>
  )
}
const Container = styled.div`
width: 90%;
margin: auto;
img{
    cursor: pointer;
}
@media(max-width: 768px){
  img{
    display: none;
  }
  width: 98%;
 
}
`;

const LeftPart = styled.div`
border-right:2px solid lightgray;
padding-right: 1rem;
button{
  width: 10rem;
}
@media(max-width: 768px){
  /* border: none; */
width  :60% ;
overflow: auto;
::-webkit-scrollbar {
  display: none;
}
}
`;
const RightPart = styled.div`
width: 80%;
overflow-x: auto;
scroll-behavior: smooth;
::-webkit-scrollbar {
  display: none;
}
button{
    background-color: lightgray;
}

`;