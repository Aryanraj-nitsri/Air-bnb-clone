import React from 'react'
import BigCard from './BigCard'
import styled  from 'styled-components'
import { useRef } from 'react'
export default function Section1() {
    const scrollBox = useRef(null);
    const url1 = "https://images.unsplash.com/photo-1519922639192-e73293ca430e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60";
    const url2 = "https://images.unsplash.com/photo-1515169067868-5387ec356754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
    const url3="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1138&q=80"
    function handleNext(e) {
        scrollBox.current.scrollBy(380, 0);
    }
    function handlePrev() {
        scrollBox.current.scrollBy(-380,0)
        
    }
  return (
      <div>
          <Header className='d-flex justify-content-between'>
              <h1>New this Week</h1>
              <div className='d-flex gap-3 align-items-center' >
                  
                  <img src="https://cdn-icons-png.flaticon.com/512/318/318276.png" alt="error" width={'30px'} onClick={handlePrev } />  
                      
                  <img src="https://cdn-icons-png.flaticon.com/512/467/467152.png" alt="error" width={'30px'} onClick={handleNext} />
              </div>
              
          </Header>
          <ImageScroller className='d-flex gap-3 mt-5' ref={scrollBox}>
              <BigCard title={'Most popular around the world' } url={url1} />
              <BigCard title={'Great for team building'} url={url2} />
              <BigCard title={'Fun for family'} url={ url3} />
              
          </ImageScroller>

    </div>
  )
}
const Header = styled.div`
width: 90%;
margin: auto;
h1{
    font-size: 3rem;
    font-weight: bold;
}
img{
    cursor: pointer;
}

@media(max-width: 768px){
    width: 98%;
    img{
        display: none;
    }
    h1{
        font-weight: normal;
    }
}
`;
const ImageScroller = styled.div`
width: 100%;
padding-left:7rem;
overflow-x: scroll;
scroll-behavior: smooth;

::-webkit-scrollbar {
  display: none;
}
@media(max-width: 768px){
    padding-left: 1rem;

}
`;