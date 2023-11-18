import classes from "./Goal.module.css";
import Card from "../Layout/Card";

import { useNavigate } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";

const Goal = () => {
  const storedUserJSON = localStorage.getItem("foundUser");
  const loggedUser = JSON.parse(storedUserJSON);
  const [imcValue, setImcValue] = useState();

  useEffect(() => {
    setImcValue(loggedUser.imc.toFixed(2));
  }, [loggedUser]);
  const navigation = useNavigate();

  const onUnderWeightExercices = () => {
    navigation("/underWeight");
  };
  const onIdealWeightExercices = () => {
    navigation("/idealWeight");
  };

  const onOverWeightExercices = () => {
    navigation("/overWeight");
  };

  const onObese = () => {
    navigation("/obese");
  };

  const onGetBachHandler = () => {
    navigation("/landingPage");
  };

  return (
    <Fragment>
      {imcValue < 18.5 && (
        <section>
          <button className={classes.getBackButton} onClick={onGetBachHandler}>
            Voltar
          </button>
          <button onClick={onUnderWeightExercices} className={classes.button}>
            Exercícios Detalhados
          </button>
          <h2>Treinamento de Resistência</h2>
          <Card>
            <h3>Agachamento:</h3>
            <p>
              Fortalece quadríceps, isquiotibiais, glúteos e músculos
              estabilizadores.
            </p>
          </Card>
          <Card>
            <h3>Supino com Barra:</h3>
            <p>Trabalha os músculos do peito, ombros e tríceps</p>
          </Card>
          <Card>
            <h3>Levantamento Terra:</h3>
            <p>
              Envolvimento de vários grupos musculares, incluindo costas,
              glúteos, isquiotibiais e core.
            </p>
          </Card>
          <Card>
            <h3>Dicas Importantes</h3>
            <p>
              Aquecimento: Sempre faça um aquecimento antes de iniciar os
              exercícios para reduzir o risco de lesões.
            </p>
            <p>
              Progressão Gradual: Aumente o peso ou a dificuldade dos exercícios
              gradualmente ao longo do tempo para desafiar seus músculos.
            </p>
            <p>
              Descanso Adequado: Permita que seus músculos descansem e se
              recuperem entre os treinos.
            </p>
            <p>
              O descanso é essencial para o crescimento muscular. Nutrição
              Adequada: Uma dieta rica em proteínas, carboidratos complexos e
              gorduras saudáveis é essencial para apoiar o ganho muscular.
            </p>
            <p>
              Hidratação: Mantenha-se hidratado durante os treinos e no dia a
              dia para apoiar a função muscular adequada.
            </p>
          </Card>
        </section>
      )}
      {imcValue > 18.5 && imcValue < 24.9 && (
        <section>
          <button className={classes.getBackButton} onClick={onGetBachHandler}>
            Voltar
          </button>
          <button onClick={onIdealWeightExercices} className={classes.button}>
            Exercícios Detalhados
          </button>
          <h2>Treinamento de Força:</h2>
          <Card>
            <p>
              Use pesos que permitam executar de 8 a 12 repetições com boa
              forma. Isso pode variar dependendo do exercício.
            </p>
            <p>
              Agachamento, levantamento terra, supino, remada, flexões
              ponderadas e outros exercícios com peso podem ser incluídos.
            </p>
          </Card>
          <h2>Treinamento Cardiovascular:</h2>
          <Card>
            <p>
              Realize atividades aeróbicas, como corrida, ciclismo, natação ou
              treinos HIIT (High-Intensity Interval Training), por cerca de 30 a
              60 minutos, de 3 a 5 vezes por semana.
            </p>
            <p>
              Varie entre exercícios de baixa e alta intensidade para desafiar
              seu corpo de maneira equilibrada.
            </p>
          </Card>
          <h2>Treinamento de Flexibilidade e Mobilidade:</h2>
          <Card>
            <p>
              Dedique tempo para exercícios de alongamento, ioga ou pilates para
              melhorar a flexibilidade e prevenir lesões.
            </p>
          </Card>
          <h2>Exercícios de Peso Corporal:</h2>
          <Card>
            <p>
              Continuar com exercícios como flexões, afundos, abdominais,
              pranchas e outros exercícios que utilizam o peso corporal para
              manter a força funcional.
            </p>
          </Card>
          <h2>Variedade e Progressão:</h2>
          <Card>
            <p>
              Mantenha a rotina variada para evitar estagnação e continuar
              desafiando o corpo.
            </p>
            <p>
              Aumente gradualmente os pesos nos exercícios de força para
              promover ganho muscular, se desejado, ou mantenha a carga atual se
              o objetivo for manter o tônus muscular.
            </p>
          </Card>
          <h2>Descanso Adequado:</h2>
          <Card>
            <p>
              Garanta dias de descanso suficientes para permitir a recuperação
              adequada entre os treinos.
            </p>
          </Card>
        </section>
      )}
      {imcValue > 24.9 && imcValue < 29.9 && (
        <section>
          <button className={classes.getBackButton} onClick={onGetBachHandler}>
            Voltar
          </button>
          <button onClick={onOverWeightExercices} className={classes.button}>
            Exercícios Detalhados
          </button>
          <h3>Caminhada:</h3>
          <Card>
            <p>
              Uma forma suave de exercício cardiovascular que pode ser adaptada
              ao seu ritmo e aumentada gradualmente.
            </p>
          </Card>
          <h3>Natação:</h3>
          <Card>
            <p>
              Ótimo para trabalhar todos os grupos musculares, proporciona
              resistência, sem sobrecarregar as articulações.
            </p>
          </Card>
          <h3>Ciclismo (Estacionário ou ao Ar Livre):</h3>
          <Card>
            <p>
              Excelente exercício cardiovascular de baixo impacto que pode ser
              adaptado à sua capacidade.
            </p>
          </Card>
          <h3>Yoga:</h3>
          <Card>
            <p>
              Ajuda na flexibilidade, equilíbrio e força, além de focar na
              respiração e na redução do estresse.
            </p>
          </Card>
          <h3>Treinamento em Circuito:</h3>
          <Card>
            <p>
              Alternar entre exercícios de resistência e cardio, permitindo
              descanso adequado entre eles.
            </p>
          </Card>
          <h3>Exercícios de Alongamento:</h3>
          <Card>
            <p>
              Importantes para melhorar a flexibilidade e reduzir a rigidez
              muscular.
            </p>
          </Card>
          <h3>Hidroginástica:</h3>
          <Card>
            <p>
              Ótima opção para pessoas com sobrepeso, pois reduz o impacto nas
              articulações enquanto proporciona resistência.
            </p>
          </Card>
          <h3>Exercícios de Bodyweight (Peso do Corpo):</h3>
          <Card>
            <p>
              Agachamentos modificados, flexões de parede, elevação pélvica e
              outros exercícios que utilizam o peso do corpo podem ser úteis.
            </p>
          </Card>
          <h3>Tai Chi:</h3>
          <Card>
            <p>
              Uma prática chinesa que combina movimentos lentos e fluidos,
              trabalhando a força e a flexibilidade.
            </p>
          </Card>
        </section>
      )}
      {imcValue > 29.9 && (
        <section>
          <button className={classes.getBackButton} onClick={onGetBachHandler}>
            Voltar
          </button>
          <button onClick={onObese} className={classes.button}>
            Exercícios Detalhados
          </button>
          <h3>Caminhada Moderada:</h3>
          <Card>
            <p>
              Comece com caminhadas curtas e lentas, aumentando gradualmente a
              duração e a intensidade.
            </p>
          </Card>
          <h3>Natação ou Hidroginástica:</h3>
          <Card>
            <p>
              Ótimos exercícios aeróbicos de baixo impacto que trabalham todos
              os grupos musculares.
            </p>
          </Card>
          <h3>Bicicleta Ergométrica ou Elíptica:</h3>
          <Card>
            <p>
              Exercícios cardiovasculares de baixo impacto que proporcionam bom
              treino sem sobrecarregar as articulações.
            </p>
          </Card>
          <h3>Yoga Suave ou Pilates:</h3>
          <Card>
            <p>
              Excelentes para melhorar a flexibilidade, o equilíbrio e a força,
              além de promover relaxamento.
            </p>
          </Card>
          <h3>Treino com Pesos Leves:</h3>
          <Card>
            <p>
              Use halteres leves para fortalecer os músculos, priorizando
              movimentos controlados e de baixa pressão sobre as articulações.
            </p>
          </Card>
          <h3>Tai Chi::</h3>
          <Card>
            <p>
              Movimentos suaves e ritmados que podem melhorar a postura, a
              flexibilidade e a força.
            </p>
          </Card>
          <h3>Aulas de Dança de Baixo Impacto:</h3>
          <Card>
            <p>
              Danças como zumba adaptadas para intensidade e movimentos de menor
              impacto.
            </p>
          </Card>
          <h3>Exercícios de Alongamento e Respiração:</h3>
          <Card>
            <p>
              Práticas de respiração e alongamento para relaxamento e melhora da
              flexibilidade.
            </p>
          </Card>
          <h3>Treinamento de Circuito Adaptado:</h3>
          <Card>
            <p>Sequências de exercícios de baixo impacto</p>
          </Card>
          <h3>Treinamento Funcional Adaptado:</h3>
          <Card>
            <p>
              Exercícios que imitam movimentos do dia a dia, visando melhorar a
              força e a mobilidade.
            </p>
          </Card>
        </section>
      )}
    </Fragment>
  );
};

export default Goal;
