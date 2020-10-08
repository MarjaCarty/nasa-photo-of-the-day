import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  background-color: #171738;
  width: 100%;
  text-align: center;

  i {
    color: #ffe0b5;
    padding: 3%;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <i class="fab fa-instagram fa-3x"></i>
      <i class="fab fa-facebook-f fa-3x"></i>
      <i class="fab fa-twitter fa-3x"></i>
    </StyledFooter>
  );
}
