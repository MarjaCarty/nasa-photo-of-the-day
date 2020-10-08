import React from "react";
import styled from "styled-components";
import img from "../assets/header-01.png";

const StyledHeader = styled.div`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 11%;

  h1,
  h3 {
    font-family: "Cinzel Decorative";
    text-align: center;
    color: #ffe0b5;
    margin: 0;
    position: relative;
    bottom: 40px;
  }

  h1 {
    font-size: 8rem;
  }

  h3 {
    font-size: 4rem;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <h1>NASA</h1>
      <h3>APOD</h3>
    </StyledHeader>
  );
}
