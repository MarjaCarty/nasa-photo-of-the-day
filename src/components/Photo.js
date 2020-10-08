import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const StyledPhoto = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    border: 5px solid #171738;
    border-radius: 20px;
    margin: 7% 0;
    padding: 1%;
    width: 100%;
  }

  p {
    width: 60%;
    color: #ffe0b5;
    text-align: center;
    background-color: #171738;
    border-radius: 20px;
    padding: 2%;
    margin: 0 auto 5% auto;
  }
`;

export default function Photo() {
  const [URL, setURL] = useState("");
  const [explanation, setExplanation] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=azZGekJaws1bTqfrHoMgQ00fW4j86q6UA8dUEpjd"
      )
      .then((res) => {
        const imageUrl = res.data.url;
        const imageExp = res.data.explanation;
        setURL(imageUrl);
        setExplanation(imageExp);
      });
  });

  return (
    <StyledPhoto>
      <div>
        <img src={URL} />
      </div>
      <div>
        <p>{explanation}</p>
      </div>
    </StyledPhoto>
  );
}
