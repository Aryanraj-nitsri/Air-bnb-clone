import React from 'react'
import { useRef } from 'react';
import styled from 'styled-components'
import SellerCard from './SellerCard';

export default function Sellers() {
  const ref = useRef(null);
  function handleNext() {
    ref.current.scrollBy(235,0)
  }
  function handlePrev() {
    ref.current.scrollBy(-235,0)
  }
  return (
    <Container className='d-flex flex-column gap-5'>
      <Header className='d-flex justify-content-between'>
        <h1>Top Sellers</h1>
        <div className='d-flex align-items-center gap-3'>
<span className='fs-4 fw-bold text-decoration-underline'>Show(9)</span>
          <img src="https://cdn-icons-png.flaticon.com/512/318/318276.png" alt="error" width={'30px'} onClick={handlePrev } />
          <img src="https://cdn-icons-png.flaticon.com/512/467/467152.png" alt="error" width={'30px'} onClick={handleNext } />
        </div>
      </Header>
      <CardContainer className='d-flex gap-3' ref={ref}>
        <SellerCard/>
        <SellerCard/>
        <SellerCard/>
        <SellerCard/>
        <SellerCard/>
        <SellerCard/>
        <SellerCard/>
        <SellerCard/>
        <SellerCard/>
        <SellerCard/>
      </CardContainer>
    </Container>
  )
}
const Header = styled.div`
img{
  cursor: pointer;
}
h1{
  font-size: 3rem;
}
@media(max-width:768px){
  img{
    display: none;
  }
  span{
    display: none;
  }
}
`;
const Container = styled.div`
width: 90%;
margin: auto;
@media(max-width:768px){
  width: 98%;
}

`;
const CardContainer = styled.div`
overflow-x: auto;
overflow-y: hidden;
scroll-behavior: smooth;
::-webkit-scrollbar {
  display: none;
}

`;