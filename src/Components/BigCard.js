import React from 'react'
import styled from 'styled-components'

export default function BigCard({title,url}) {
  return (
      <Cardcontainer url={url} className='rounded-4 p-4 d-flex flex-column flex-shrink-0'>
          <span className='text-white fs-4'>collection</span>
      <h1 className='text-white'>{title }</h1>
          <button type="button" className="btn btn-light align-self-start fs-4 px-4 ">Show All</button>
    </Cardcontainer>
  )
}
const Cardcontainer = styled.div`
width: 60rem;
height: 33rem;
background-image:url(${props => props.url}) ;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
h1{
    width: 60%;
    flex-grow: 1;
}
@media(max-width: 768px){
  height: 50rem;
  width: 90%;
}
`;
