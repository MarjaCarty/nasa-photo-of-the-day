import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const StyledPhoto = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    border: 5px solid #171738;
    border-radius: 20px;
    margin: 7% 0;
    padding: 1%;
    width: 60vw;
  }

  p {
    width: 60%;
    color: #ffe0b5;
    text-align: center;
    background-color: #171738;
    border-radius: 20px;
    padding: 3%;
    margin: 0 auto 3% auto;
  }

  .innerP {
    margin: 0;
    padding: 0 0 2%;
    font-weight: bold;
    width: 100%;
    font-size: 2rem;

    @media (max-width: 550px) {
      font-size: 1rem;
    }
  }
`;

export default function Photo() {
  const [URL, setURL] = useState("");
  const [explanation, setExplanation] = useState("");
  const [date, setDate] = useState();
  const [title, setTitle] = useState();

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=azZGekJaws1bTqfrHoMgQ00fW4j86q6UA8dUEpjd"
      )
      .then((res) => {
        const imageUrl = res.data.url;
        const imageExp = res.data.explanation;
        const imageDate = res.data.date;
        const imageTitle = res.data.title;
        setURL(imageUrl);
        setExplanation(imageExp);
        setDate(imageDate);
        setTitle(imageTitle);
      });
  });

  return (
    <StyledPhoto>
      <div>
        <img src={URL} />
      </div>
      <div>
        <p>
          <p class="innerP">{title}</p>
          <p class="innerP">{date}</p>
          {explanation}
        </p>
      </div>
    </StyledPhoto>
  );
}
