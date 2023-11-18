import React, { useEffect, useState } from "react";

import classes from "./About.module.css";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigation = useNavigate();

  const storedUserJSON = localStorage.getItem("foundUser");
  const loggedUser = JSON.parse(storedUserJSON);

  const [imcValidator, setImcValidator] = useState(false);
  const [underWeight, setUnderWeight] = useState(false);
  const [idealWeight, setIdealWeight] = useState(false);
  const [overweight, setOverweight] = useState(false);
  const [obese, setOBese] = useState(false);

  useEffect(() => {
    if (loggedUser.imc.toFixed(2) < 18.6 || loggedUser.imc.toFixed(2) > 24.9) {
      setImcValidator(false);
    } else {
      setImcValidator(true);
    }
  }, [loggedUser.imc]);

  const onGetBackHandler = () => {
    navigation("/profilePage");
  };

  useEffect(() => {
    console.log(loggedUser.imc);
    if (loggedUser.imc.toFixed(2) < 18.6) {
      setUnderWeight(true);
      setIdealWeight(false);
      setOverweight(false);
      setOBese(false);
    } else if (
      loggedUser.imc.toFixed(2) > 18.6 &&
      loggedUser.imc.toFixed(2) < 24.9
    ) {
      console.log("hey");
      setUnderWeight(false);
      setIdealWeight(true);
      setOverweight(false);
      setOBese(false);
    } else if (
      loggedUser.imc.toFixed(2) > 24.9 &&
      loggedUser.imc.toFixed(2) < 29.9
    ) {
      console.log("nope");
      setUnderWeight(false);
      setIdealWeight(false);
      setOverweight(true);
      setOBese(false);
    } else {
      setUnderWeight(false);
      setIdealWeight(false);
      setOverweight(false);
      setOBese(true);
    }
  }, [loggedUser.imc]);

  return (
    <section className={classes.section}>
      <button onClick={onGetBackHandler} className={classes.getBackButton}>
        Voltar
      </button>
      <div>
        <h1 className={classes.h1}>Sobre o APP</h1>
        <h4 className={classes.aboutApp}>
          Easyfit é um aplicativo desenvolvido para auxiliar pessoas a
          desenvolver seu corpo baseado nas suas condições atuais
        </h4>
        <Card>
          <h1>Sobre Você</h1>
          <h3 className={classes.h2}>Atualmente seu IMC é de </h3>
          <h4 className={imcValidator ? classes.green : classes.red}>
            {loggedUser.imc.toFixed(2)}
          </h4>
          {underWeight && <p>Você está abaixo do peso ideal</p>}
          {idealWeight && <p>Você está no seu peso ideal</p>}
          {overweight && <p>Você está acima do peso ideal</p>}
          {obese && <p>Você está com obesidade </p>}
        </Card>
      </div>
    </section>
  );
};

export default About;
