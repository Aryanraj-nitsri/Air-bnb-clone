import React from 'react'
import styled  from 'styled-components'

export default function MenuCard({flag,setflag}) {
  return (
      <MenuContainer className='d-flex gap-4 align-items-center p-2 rounded-5' onClick={()=>setflag(!flag)}>
         <img src="https://cdn-icons-png.flaticon.com/512/7131/7131131.png" alt="error" width={'20px'} />
         <img src="https://cdn-icons-png.flaticon.com/512/727/727399.png" alt="error" width={'30px'} />
    </MenuContainer>
  )
}
const MenuContainer = styled.div`
border: thin solid lightgray;
cursor: pointer;
`;