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
      <h2>Caminhada Rápida</h2>
      <Card>
        <p>
          Comece com 15-25 minutos e aumente gradualmente para 30-60 minutos à
          medida que sua resistência melhora
        </p>
        <Link to="https://www.youtube.com/watch?v=dX8WBg90mqA&ab_channel=H%C3%A1bitosSaud%C3%A1veis">
          Assista ao Video
        </Link>
      </Card>
      <h2>Subir Escada</h2>
      <Card>
        <p>
          Comece com alguns lances de escada e aumente gradualmente conforme a
          resistência.
        </p>
        <Link to="https://www.youtube.com/watch?v=LFD2myeqv1Q&ab_channel=CarolBorba">
          Assista ao Video
        </Link>
      </Card>
      <h2>Exercícios Aeróbicos de Baixo Impacto</h2>
      <Card>
        <p>Segue abaixo um vídeo com exercícios aeróbicos de baixo impacto</p>
        <Link to="https://www.youtube.com/watch?v=mKDEQxWnpbU&ab_channel=XTREME21">
          Assista ao Video
        </Link>
      </Card>
      <h2>Treinamento de Resistência</h2>
      <Card>
        <p>Geralmente, 3 séries de 10-15 repetições para cada exercício</p>
        <Link to="https://www.youtube.com/watch?v=lSqUdrppCGQ&ab_channel=UOL">
          Assista ao Video
        </Link>
      </Card>
      <h2>Hidroginástica</h2>
      <Card>
        <p>Segue abaixo um vídeo com exercícios para Hidroginástica</p>
        <Link to="https://www.youtube.com/watch?v=w6Lbmq9SdjI&ab_channel=WaterGym">
          Assista ao Video
        </Link>
      </Card>
      <h2>Bicicleta Estacionária</h2>
      <Card>
        <p>
          Depende do nível de condicionamento físico, mas comece com 15-30
          minutos e aumente gradualmente
        </p>
        <p>
          Caso não tenha uma bicicleta estacionária utilize de uma bicicleta
          comum e faça um passeio, considerando a mesma regra acima
        </p>
        <Link to="https://www.youtube.com/watch?v=uhqGxNbWTkk&ab_channel=Exerc%C3%ADcioemCasa">
          Assista ao Video
        </Link>
      </Card>
      <h2>Alongamento</h2>
      <Card>
        <p>Mantenha cada posição por 15-30 segundos, repetindo 2-3 vezes</p>
        <Link to="https://www.youtube.com/watch?v=QISidrOIfZM&ab_channel=INCR%C3%8DVEL">
          Assista ao Video
        </Link>
      </Card>
      <h2>Exercícios de Respiração e Relaxamento</h2>
      <Card>
        <p>
          Práticas de respiração profunda e relaxamento podem variar de 5 a 30
          minutos, dependendo da técnica e da preferência pessoal.
        </p>
        <Link to="https://www.youtube.com/watch?v=Rhfq53a65MU&ab_channel=VivaAcademiaCuritiba">
          Assista ao Video
        </Link>
      </Card>
      <h2>Yoga</h2>
      <Card>
        <p>Siga o ritmo da aula</p>
        <Link to="https://www.youtube.com/watch?v=phmPzI44aLU&ab_channel=FernandaYoga">
          Assista ao Video
        </Link>
      </Card>
      <h2>Taichi</h2>
      <Card>
        <p>Siga as instruções da aula</p>
        <Link to="https://www.youtube.com/watch?v=CDl2eYRzhnM&ab_channel=AndreLeung">
          Assista ao Video
        </Link>
      </Card>
    </section>
  );
};

export default IdealWeight;
