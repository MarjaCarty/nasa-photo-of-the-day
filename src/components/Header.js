import React from "react";
import styled from "styled-components";
import img from "../assets/header-01.png";

const StyledHeader = styled.div`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 12%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 15%;

  h1,
  h3 {
    font-family: "Cinzel Decorative";
    text-align: center;
    color: #ffe0b5;
    margin: 0;
    position: relative;
  }

  h1 {
    font-size: 7vw;
  }

  h3 {
    font-size: 3vw;
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
