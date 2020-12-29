import React, { useState, useEffect } from "react";
import Axios from "axios";
import Home from "../ui/Home";
const API = () => {
  let randomColor = require("randomcolor");
  const [acronym, setAcronym] = useState("");
  const [coinName, setCoinName] = useState("");
  const [logo, setLogo] = useState("");
  const [date, setDate] = useState("");
  const [color, setColor] = useState("");

  const callApi = () => {
    Axios({
      method: "GET",
      url: "https://random-data-api.com/api/crypto_coin/random_crypto_coin",
      responseType: "json",
    }).then((result) => {
      setAcronym(result.data.acronym);
      setCoinName(result.data.coin_name);
      setLogo(result.data.logo);
      setDate(new Date().toDateString());
      setColor(randomColor({luminosity: 'light'}));
    });
  };
  useEffect(() => {
    callApi();
  }, []);

  return (
    <React.Fragment>
      <Home
        color={color}
        date={date}
        callApi={callApi}
        logo={logo}
        name={coinName}
        acronym={acronym}
      />
    </React.Fragment>
  );
};

export default API;
