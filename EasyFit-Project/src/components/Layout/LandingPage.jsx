import classes from "./LandingPage.module.css";
import image from "../../Imgs/logo.jpeg"

import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigation = useNavigate();

  const profilePageHandler = () => {
    navigation("/profilePage");
  };

  const feedPageHandler = () => {
    navigation("/feed");
  };

  const goalPageHandler = () => {
    navigation("/goalPage");
  };

  return (
    <div className={classes.container}>
      <img src={image} className={classes.image} alt="A landing page" />
      <ul>
        <li>
          <button onClick={profilePageHandler}>Perfil</button>
        </li>
        <li>
          <button onClick={feedPageHandler}>Alimentação</button>
        </li>
        <li>
          <button onClick={goalPageHandler}>Treinamento</button>
        </li>
      </ul>
    </div>
  );
};

export default LandingPage;
