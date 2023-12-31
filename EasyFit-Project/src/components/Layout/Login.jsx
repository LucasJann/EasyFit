import image from "../../Imgs/logo.jpeg";
import classes from "./Login.module.css";

import { Form } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigation = useNavigate();

  const [email, setEmail] = useState();

  const onButton = async () => {
    const response = await fetch(
      "https://react-http-f8211-default-rtdb.firebaseio.com/easyfit.json"
    );

    const responseData = await response.json();

    const foundUser = Object.values(responseData).find(
      (data) => data.email === email
    );

    if (foundUser) {
      const foundUserJSON = JSON.stringify(foundUser);
      localStorage.setItem("foundUser", foundUserJSON);
      navigation("/landingPage");
    } else {
      console.log("O usuário não foi encontrado");
    }
  };

  const emailChangeHandler = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
  };

  const onRegisterHandler = () => {
    navigation("/registerPage");
  };

  return (
    <Form className={classes.form} onSubmit={onButton}>
      <img
        src={image}
        alt="Pessoa sentada em uma pilha de dinheiro com as pernas cruzadas"
        className={classes.image}
      />
      <div className={classes.container}>
        <h2 className={classes.h2}>Email</h2>
        <input type="email" onChange={emailChangeHandler} />
        <h2 className={classes.h2}>Senha</h2>
        <input type="password" />
        <p className={classes.paragraph} onClick={onRegisterHandler}>
          Clique aqui para se registrar
        </p>
        <button className={classes.loginBtn}>Entrar</button>
      </div>
    </Form>
  );
};

export default Login;
