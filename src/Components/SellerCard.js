import React from 'react'
import styled  from 'styled-components'

export default function SellerCard () {
  return (
      <Container className='flex-shrink-0'>
          <Cardbackground className='rounded-4 d-flex justify-content-end align-items-start p-2'>
              <img src="https://cdn-icons-png.flaticon.com/512/1538/1538598.png" alt="error" width={'20px'} />
          </Cardbackground>
          <div>
              <p className='fs-4 d-flex gap-2'>
                  
              <span><img src="https://cdn-icons-png.flaticon.com/512/2893/2893811.png" alt="error" width={'15px'} /></span><span>4.33</span><span className='text-dark opacity-75'>(153).</span>United State
              </p>
              <p className='fs-3'>Plan The Perfect New york vacation</p>
              <p className='fs-4'><span className='fw-bold'>From 1,569</span>  /person</p>
              
          </div>
    </Container>
  )
}
const Cardbackground = styled.div`
width: 100%;
height: 70%;
background-image: url('https://images.unsplash.com/photo-1609861517208-e5b7b4cd4b87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80');
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`;
const Container = styled.div`
width: 22rem;
height: 38rem;
`;
