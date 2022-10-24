import React from "react";
import styled from "styled-components";
import MenuCard from "./MenuCard";

export default function Nav({flag,setflag}) {
  return (
    <NavContainer className="d-flex justify-content-between">
      <RightPart className="d-flex align-items-center gap-3">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2111/2111320.png"
          alt="error"
          width={"35px"}
        />
        <span>airbnb</span>
      </RightPart>
          <LeftPart className="d-flex gap-5 ">
              <div className="d-flex gap-5 align-items-center">
                  
        <span className="fs-4 fw-bold">Become a host</span>
        <img
          src="https://cdn-icons-png.flaticon.com/512/546/546310.png"
          alt="error"
          width={"18px"}
        />
              </div>
        <MenuCard flag={flag} setflag={ setflag} />
      </LeftPart>
    </NavContainer>
  );
}
const NavContainer = styled.div`
  border-bottom: thin solid lightgray;
  padding: 2rem 0rem;
`;

const RightPart = styled.div`
  width: 20%;
  color: red;
  font-size: 2.5rem;
  font-weight: 700;
`;
const LeftPart = styled.div`
  width: 40%;
  justify-content: end;
`;
