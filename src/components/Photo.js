import React, { useState, useEffect } from "react";
import axios from "axios";

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
    <div className="Photo">
      <div>
        <img src={URL} />
      </div>
      <div>
        <p>{explanation}</p>
      </div>
    </div>
  );
}
