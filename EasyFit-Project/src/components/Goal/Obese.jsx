import React from "react";
import Card from "../Layout/Card";
import classes from "../Goal/IdealWeight.module.css";
import { useNavigate, Link } from "react-router-dom";

const Obese = () => {
  const navigation = useNavigate();

  const onGetBackHandler = () => {
    navigation("/goalPage");
  };

  return (
    <section>
      <button className={classes.getBackButton} onClick={onGetBackHandler}>
        Voltar
      </button>
      <h2>Caminhada Moderada</h2>
      <Card>
        <p>
          Comece com caminhadas curtas e lentas, aumentando gradualmente a
          duração e a intensidade.
        </p>
        <Link to="https://www.youtube.com/watch?v=4hFrQEBA8pk&ab_channel=Aur%C3%A9lioAlfieri">
          Assista ao Video
        </Link>
      </Card>
      <h2>Natação ou Hidroginástica</h2>
      <Card>
        <p>
          Ótimos exercícios aeróbicos de baixo impacto que trabalham todos os
          grupos musculares.
        </p>
        <Link to="https://www.youtube.com/watch?v=BwUV5lvamrY&ab_channel=LucasSantos">
          Assista ao Video
        </Link>
      </Card>
      <h2>Bicicleta Ergométrica ou Elíptica:</h2>
      <Card>
        <p>
          Exercícios cardiovasculares de baixo impacto que proporcionam bom
          treino sem sobrecarregar as articulações.
        </p>
        <Link to="https://www.youtube.com/watch?v=AzfUZN4NEK0&ab_channel=GrowthConte%C3%BAdo">
          Assista ao Video
        </Link>
        <p>
          Caso não possua bicicletas ergométricas ou elípticas, utilize de
          bicicletas convencionais
        </p>
        <Link to="https://www.youtube.com/watch?v=ts9PJfEafFU&ab_channel=RafaelObelix">
          Assista ao Video
        </Link>
        <p>
          Abaixo um video extra para pessoas acima do peso que estão iniciando
          na Bike
        </p>
        <Link to="https://www.youtube.com/watch?v=GCzTK7YmDHw&ab_channel=PEDALENTO">
          Assista ao Video
        </Link>
      </Card>
      <h2>Yoga Suave ou Pilates</h2>
      <Card>
        <p>
          Excelentes para melhorar a flexibilidade, o equilíbrio e a força, além
          de promover relaxamento.
        </p>
        <Link to="https://www.youtube.com/watch?v=_LXQwnkpVys&ab_channel=JuRomano">
          Assista ao Video de Yoga
        </Link>
        <br></br>
        <Link to="https://www.youtube.com/watch?v=6Xyu_MudV3c&ab_channel=RENOVEPILATES%7CPILATESEMCASA">
          Assista ao Video de Pilates
        </Link>
      </Card>
      <h2>Treino com Pesos Leves</h2>
      <Card>
        <p>
          Use halteres leves para fortalecer os músculos, priorizando movimentos
          controlados e de baixa pressão sobre as articulações.
        </p>
        <Link to="https://www.youtube.com/watch?v=PHqSRTLpuj8&ab_channel=CarolBorba">
          Assista ao Video
        </Link>
      </Card>
      <h2>Taichi</h2>
      <Card>
        <p>
          Movimentos suaves e ritmados que podem melhorar a postura, a
          flexibilidade e a força.
        </p>
        <Link to="https://www.youtube.com/watch?v=skeLldGDrjY&pp=ygUiVGFpIGNoaSBwYXJhIHBlc3NvYXMgY29tIG9iZXNpZGFkZQ%3D%3D&ab_channel=AndreLeung">
          Assista ao Video
        </Link>
      </Card>
      <h2>Aulas de Dança de Baixo Impacto</h2>
      <Card>
        <p>
          Danças como zumba adaptadas para intensidade e movimentos de menor
          impacto
        </p>
        <Link to="https://www.youtube.com/watch?v=KAjcFjgCUaI&ab_channel=VueloDan%C3%A7aeMovimento">
          Sugestão de video para dança 1
        </Link>
        <br></br>
        <Link to="https://www.youtube.com/watch?v=5Ps4x1GwqYs&ab_channel=VueloDan%C3%A7aeMovimento">
          Sugestão de video para dança 2
        </Link>
      </Card>
      <h2>Exercícios de Alongamento e Respiração</h2>
      <Card>
        <p>
          Práticas de respiração e alongamento para relaxamento e melhora da
          flexibilidade.
        </p>
        <Link to="https://www.youtube.com/watch?v=Mk1P3jTrFec&ab_channel=Sa%C3%BAdeGG">
          Video de Alongamento
        </Link>
        <br></br>
        <Link to="https://www.youtube.com/watch?v=SRyszTg7rjg&ab_channel=Aur%C3%A9lioAlfieri">
          Video de Respiração
        </Link>
      </Card>
      <h2>Treinamento de Circuito Adaptado:</h2>
      <Card>
        <p>Sequências de exercícios de baixo impacto</p>
        <Link to="https://www.youtube.com/watch?v=Ta8b7UyPurs&ab_channel=Roberta%27sGymBrasil">
          Assista ao Video
        </Link>
      </Card>
      <h2>Treinamento Funcional Adaptado:</h2>
      <Card>
        <p>
          Exercícios que imitam movimentos do dia a dia, visando melhorar a
          força e a mobilidade.
        </p>
        <Link to="https://www.youtube.com/watch?v=YqhM9mCHdoA&ab_channel=JLBoaforma">
          Assista ao Video
        </Link>
      </Card>
    </section>
  );
};

export default Obese;
