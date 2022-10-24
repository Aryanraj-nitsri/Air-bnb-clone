import React from 'react'
import Nav from '../Components/Nav'
import Section1 from '../Components/Section1'
import Sellers from '../Components/Sellers'
import ButtonSliders from '../Components/ButtonSliders'
import  styled from 'styled-components'
import { useState } from 'react'

export default function Experience() {
    const [flag, setflag] = useState(false);
    return (
        <div className='d-flex flex-column gap-5 position-relative'>

            <Nav flag={flag} setflag={setflag} />
            {flag &&
                <Navmenu className='d-flex flex-column p-2 position-absolute rounded-4 gap-3'>
                    <div className='d-flex flex-column gap-3 custom-border'>
                        <span className='fs-4'>Sign up</span>
                        <span className='fs-4'>Log in</span>
                    </div>
                    <div className='d-flex flex-column gap-3'>
                        <span className='fs-4'>Host your home</span>
                        <span className='fs-4'>Host an experience</span>
                        <span className='fs-4'>Help</span>
                    </div>
                </Navmenu>}
            <Section1 />
<ButtonSliders/>
            <Sellers/>
        
        </div>
          
  )
}
const Navmenu = styled.div`
width: 20rem;
right: 0;
top: 7%;
background-color: white;
border: thin solid lightgray;
.custom-border{
    border-bottom: thin solid lightgray;
    padding-bottom: 1rem;
}
`;
