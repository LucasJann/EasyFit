import React from "react";
import Card from "../Layout/Card";
import classes from "../Goal/UnderWeight.module.css";
import { useNavigate, Link } from "react-router-dom";

const UnderWeight = () => {
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
      <h2>Supino com Barra:</h2>
      <Card>
        <p>Faça 3 a 4 séries de 8 a 12 repetições.</p>
        <p>Descanse de 60 a 90 segundos entre cada série.</p>
        <p>
          Utilize um peso que seja desafiador, mas que permita a execução
          correta do exercício.
        </p>
        <Link to="https://www.youtube.com/watch?v=sqOw2Y6uDWQ&ab_channel=LeandroTwin">
          Assista ao Video
        </Link>
      </Card>
      <h2>Levantamento Terra</h2>
      <Card>
        <p>Realize 3 séries de 6 a 10 repetições</p>
        <p>Descanse de 2 a 3 minutos entre cada série.</p>
        <p>
          Concentre-se na técnica correta para evitar lesões na região lombar.
        </p>
        <Link to="https://www.youtube.com/shorts/H1qG2ed4WTY">
          Assista ao Video
        </Link>
      </Card>
      <h2>Supino sem Barra (Flexão de Braço)</h2>
      <Card>
        <h3>Execucação</h3>
        <p>
          Abaixe o corpo flexionando os cotovelos, mantendo o tronco reto, até
          que o peito quase toque o chão..
        </p>
        <p>
          Mantenha o núcleo contraído e os músculos abdominais ativados para
          manter o corpo em linha reta.
        </p>
        <p>
          Empurre o corpo de volta à posição inicial estendendo os braços
          completamente.
        </p>
        <h3>Respiração</h3>
        <p>Ao abaixar o corpo, inspire.</p>
        <p>Ao empurrar o corpo para cima, expire.</p>
        <h3>Repetições e Séries</h3>
        <p>
          Inicie com um número confortável de repetições, como 8 a 10, e
          gradualmente.
        </p>
        <p>
          Faça de 3 a 4 séries de flexões, descansando cerca de 60 segundos
          entre cada série.
        </p>
        <h3>Dicas</h3>
        <p>Mantenha o corpo em linha reta durante todo o movimento.</p>
        <p>Evite arquear as costas ou elevar os quadris.</p>
        <p>Mantenha os cotovelos próximos ao corpo durante a flexão..</p>
        <p>
          Se necessário, você pode começar fazendo flexões com os joelhos no
          chão para reduzir a resistência.
        </p>
        <Link to="https://www.youtube.com/watch?v=frLeoopFuss&ab_channel=Ces%C3%A3oBigC%7CTudosobreTAF">
          Assista ao Video
        </Link>
      </Card>
      <h2>Levantamento Terra com Peso Corporal</h2>
      <Card>
        <h3>Posição Inicial</h3>
        <p>
          Fique em pé, com os pés na largura dos quadris e os joelhos levemente
          flexionados.
        </p>
        <p>Cruze os braços sobre o peito ou coloque as mãos atrás da cabeça.</p>
        <h3>Execucação</h3>
        <p>
          Mantendo as costas retas, incline-se para frente a partir dos quadris,
          como se estivesse tentando tocar o chão com as mãos.
        </p>
        <p>
          Desça o tronco mantendo os joelhos ligeiramente flexionados até sentir
          um alongamento nos isquiotibiais.
        </p>
        <p>
          Mantenha os músculos abdominais contraídos e o núcleo engajado durante
          todo o movimento.
        </p>
        <p>
          Retorne à posição inicial, pressionando os quadris para cima e
          estendendo o corpo.
        </p>
        <h3>Respiração</h3>
        <p>Ao descer, inspire.</p>
        <p>Ao retornar à posição inicial, expire.</p>
        <h3>Repetições e Séries</h3>
        <p>
          Comece com um número confortável de repetições, como 8 a 12, e aumente
          gradualmente conforme sua força e flexibilidade melhoram.
        </p>
        <p>
          Faça de 3 a 4 séries do exercício, descansando cerca de 60 segundos
          entre cada série.
        </p>
        <Link to="https://www.youtube.com/watch?v=9Gzmh4iHfLw&ab_channel=LEOSTRONDA">
          Assista ao Video
        </Link>
      </Card>
    </section>
  );
};

export default UnderWeight;
