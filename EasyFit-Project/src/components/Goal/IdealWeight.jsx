import React from "react";
import Card from "../Layout/Card";
import classes from "../Goal/IdealWeight.module.css";
import { useNavigate, Link } from "react-router-dom";

const IdealWeight = () => {
  const navigation = useNavigate();

  const onGetBackHandler = () => {
    navigation("/goalPage");
  };

  return (
    <section>
      <button className={classes.getBackButton} onClick={onGetBackHandler}>
        Voltar
      </button>
      <h2>Agachamento</h2>
      <Card>
        <p>Realize 3 séries de 8 a 12 repetições.</p>
        <p>Descanse de 60 a 90 segundos entre cada série.</p>
        <p>Mantenha a forma correta durante o exercício para evitar lesões.</p>
        <Link to="https://www.youtube.com/watch?v=PopLJv4U4FY&ab_channel=Aur%C3%A9lioAlfieri">
          Assista ao Video
        </Link>
      </Card>
      <h2>Flexão de Braço</h2>
      <Card>
        <p>Realize 3 séries de 8 a 12 repetições.</p>
        <p>Descanse de 30 a 60 segundos entre cada série.</p>
        <p>Mantenha o corpo em linha reta durante todo o movimento.</p>
        <Link to="https://www.youtube.com/watch?v=F9FC_KBsLpY&ab_channel=LeandroTwin">
          Assista ao Video
        </Link>
      </Card>
      <h2>Prancha </h2>
      <Card>
        <p>3 séries de 30 segundos a 1 minuto</p>
        <p> Descanse 30 segundos entre cada série.</p>
        <p>
          Mantenha o corpo reto e firme, evitando arquear ou curvar as costas.
        </p>
        <Link to="https://www.youtube.com/watch?v=TxadpmTHK08&ab_channel=LeandroTwin">
          Assista ao Video
        </Link>
      </Card>
      <h2>Afundo </h2>
      <Card>
        <p>3 séries de 10 a 12 repetições para cada perna.</p>
        <p> Descanse 45 a 60 segundos entre cada série.</p>
        <p>Certifique-se de manter o equilíbrio e a postura correta.</p>
        <Link to="https://www.youtube.com/watch?v=SNUWg0De4RE&ab_channel=TreinoCorreto">
          Assista ao Video
        </Link>
      </Card>
      <h2>Ponte de Glúteos </h2>
      <Card>
        <p>3 séries de 12 a 15 repetições.</p>
        <p>Descanse 30 segundos entre cada série.</p>
        <p>
          Concentre-se em contrair os músculos dos glúteos ao levantar os
          quadris.
        </p>
        <Link to="https://www.youtube.com/watch?v=6jS6aH-78w4&ab_channel=PersonalThaisOliveira">
          Assista ao Video
        </Link>
      </Card>
      <h2>Abdominais </h2>
      <Card>
        <p> 3 séries de 15 a 20 repetições..</p>
        <p>Descanse 30 segundos entre cada série.</p>
        <p>Evite puxar o pescoço e mantenha a respiração constante</p>
        <Link to="https://www.youtube.com/watch?v=ths0O_cIjM4&ab_channel=RenatoCariani">
          Assista ao Video
        </Link>
      </Card>
      <h2>Burpee </h2>
      <Card>
        <p> 3 séries de 8 a 10 repetições</p>
        <p> Descanse 60 segundos entre cada série.</p>
        <p>
          Execute o movimento de forma controlada, mantendo a técnica correta.
        </p>
        <Link to="https://www.youtube.com/watch?v=auBLPXO8Fww&ab_channel=CrossFit">
          Assista ao Video
        </Link>
      </Card>
    </section>
  );
};

export default IdealWeight;
