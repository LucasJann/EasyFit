import React, { Fragment, useEffect, useState } from "react";
import Card from "../Layout/Card";
import classes from "./Goal.module.css";

import { useNavigate } from "react-router-dom";

const Feed = () => {
  const navigation = useNavigate();

  const storedUserJSON = localStorage.getItem("foundUser");
  const loggedUser = JSON.parse(storedUserJSON);
  const [imcValue, setImcValue] = useState();

  useEffect(() => {
    setImcValue(loggedUser.imc.toFixed(2));
  }, [loggedUser]);

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
          <h2>Refeições Principais</h2>
          <Card>
            <h3>Café da Manhã</h3>
            <p>
              Aveia com leite integral ou iogurte natural, frutas secas e nozes.
            </p>
            <p>
              Omelete ou ovos mexidos com vegetais (espinafre, tomate,
              cogumelos).
            </p>
            <p>1-2 fatias de pão integral com abacate ou pasta de amendoim.</p>
          </Card>
          <Card>
            <h3>Lanche da manhã</h3>
            <p>Frutas frescas com uma porção de nozes ou castanhas.</p>
            <p>
              Smoothie com banana, aveia, leite integral e manteiga de amêndoas.
            </p>
          </Card>
          <Card>
            <h3>Almoço</h3>
            <p>
              Arroz integral ou quinoa com vegetais e proteína (frango, peixe,
              carne magra).
            </p>
            <p>Salada de folhas verdes com azeite de oliva e sementes.</p>
            <p>Feijão ou legumes cozidos.</p>
          </Card>
          <Card>
            <h3>Lanche da tarde</h3>
            <p>Iogurte natural com granola e frutas.</p>
            <p>Sanduíche de pasta de grão-de-bico, queijo e vegetais.</p>
          </Card>
          <Card>
            <h3>Jantar</h3>
            <p>Batata-doce ou outro carboidrato complexo.</p>
            <p>Peixe grelhado ou frango com legumes refogados.</p>
            <p>Salada variada com azeite e vinagre.</p>
          </Card>
          <Card>
            <h3>Ceia (opcional)</h3>
            <p>
              Um lanche leve, como um copo de leite, um pedaço de queijo ou
              algumas bolachas integrais.
            </p>
          </Card>
          <h2>Dicas Gerais</h2>
          <Card>
            <p>
              Tente aumentar gradualmente o tamanho das porções em cada
              refeição.
            </p>
            <p>
              Inclua lanches nutritivos entre as refeições principais para
              aumentar a ingestão calórica diária.
            </p>
            <p>
              Opte por alimentos ricos em calorias e nutrientes, como nozes,
              abacate, azeite de oliva, carnes magras, etc.
            </p>
            <p>
              Evite Beber Líquidos Antes das Refeições: Isso pode fazer com que
              você se sinta cheio mais rapidamente. Prefira beber líquidos entre
              as refeições.
            </p>
            <p>
              Certifique-se de incluir uma boa fonte de proteína, carboidratos
              complexos, gorduras saudáveis ​​e vegetais em cada refeição.
            </p>
            <p>Beba água regularmente ao longo do dia.</p>
            <p>
              Lembre-se, o ganho de peso saudável é um processo gradual. Além da
              dieta, a prática regular de exercícios físicos pode ajudar a
              aumentar a massa muscular e a saúde geral.
            </p>
          </Card>
        </section>
      )}
      {imcValue > 18.5 && imcValue < 24.9 && (
        <section>
          <button className={classes.getBackButton} onClick={onGetBachHandler}>
            Voltar
          </button>
          <h2>Refeições Principais</h2>
          <Card>
            <h3>Café da Manhã</h3>
            <p>
              Opções variadas de frutas frescas (ex.: banana, maçã, morangos).
            </p>
            <p>Cereal integral com leite ou iogurte natural.</p>
            <p>
              Ovos mexidos ou cozidos, adicionando vegetais de sua preferência.
            </p>
          </Card>
          <Card>
            <h3>Lanche da manhã:</h3>
            <p>Um punhado de nozes, castanhas ou amêndoas.</p>
            <p>Frutas desidratadas (como damascos, passas ou figos).</p>
          </Card>
          <Card>
            <h3>Almoço</h3>
            <p>
              Porção adequada de proteína magra (frango, peixe, tofu) preparada
              com pouca gordura.
            </p>
            <p>
              Salada colorida com vegetais frescos, como folhas verdes, tomate,
              pepino, cenoura, etc..
            </p>
            <p>Arroz integral, quinoa ou outro grão integral.</p>
          </Card>
          <Card>
            <h3>Lanche da tarde:</h3>
            <p>
              Iogurte natural ou kefir com um pouco de granola e frutas frescas.
            </p>
            <p>
              Salada colorida com vegetais frescos, como folhas verdes, tomate,
              pepino, cenoura, etc..
            </p>
            <p>Palitos de cenoura ou pepino com hummus.</p>
          </Card>
          <Card>
            <h3>Jantar</h3>
            <p>Proteína magra (peixe, frango, tofu) grelhada ou assada.</p>
            <p>Vegetais refogados ou cozidos no vapor</p>
            <p>Batata-doce ou quinoa como opção de carboidrato.</p>
          </Card>
          <Card>
            <h3>Ceia (opcional):</h3>
            <p>
              Um pequeno lanche leve, como uma fruta ou uma bebida quente (chá
              de ervas, por exemplo).
            </p>
          </Card>
          <h2>Dicas Gerais</h2>
          <Card>
            <p>
              Mantenha o equilíbrio coma uma variedade de alimentos para obter
              nutrientes diversos.
            </p>
            <p>
              Mantenha porções adequadas para não exceder as necessidades
              calóricas diárias.
            </p>
            <p>
              Beba água regularmente ao longo do dia para se manter hidratado.
            </p>
            <p>
              Combine uma alimentação saudável com atividade física regular para
              manter a saúde e a boa forma
            </p>
            <p>A moderação é essencial, mesmo em alimentos saudáveis.</p>
            <p>
              Um sono adequado também é fundamental para manter um peso
              saudável.
            </p>
          </Card>
        </section>
      )}
      {imcValue > 24.9 && imcValue < 29.9 && (
        <section>
          <button className={classes.getBackButton} onClick={onGetBachHandler}>
            Voltar
          </button>
          <h2>Refeições Principais</h2>
          <Card>
            <h3>Café da manhã</h3>
            <p>
              Aveia ou cereal integral com leite desnatado ou iogurte natural.
            </p>
            <p>Frutas frescas, como morangos, mirtilos ou banana.</p>
            <p>Ovos cozidos ou mexidos (sem adição de óleo ou manteiga).</p>
          </Card>
          <Card>
            <h3>Lanche da manhã:</h3>
            <p>Um punhado de nozes, castanhas ou amêndoas.</p>
            <p>Frutas frescas ou vegetais crus (cenoura, pepino) com hummus.</p>
          </Card>
          <Card>
            <h3>Almoço</h3>
            <p>Proteína magra (frango, peixe, tofu) grelhada ou assada.</p>
            <p>
              Vegetais variados e coloridos, preferencialmente cozidos ou crus.
            </p>
            <p>Quinoa, arroz integral ou batata-doce (em porções moderadas).</p>
          </Card>
          <Card>
            <h3>Lanche da tarde:</h3>
            <p>Iogurte natural ou kefir com um pouco de granola ou sementes.</p>
            <p>
              Um pequeno sanduíche integral com pasta de abacate, queijo magro e
              vegetais.
            </p>
          </Card>
          <Card>
            <h3>Jantar</h3>
            <p>
              Sopa de legumes ou salada com proteína magra (frango desfiado, por
              exemplo).
            </p>
            <p>Peixe ou tofu grelhado com vegetais cozidos no vapor.</p>
          </Card>
          <Card>
            <h3>Ceia (opcional)</h3>
            <p>
              Uma xícara de chá de ervas ou um pequeno lanche leve, como uma
              fruta.
            </p>
          </Card>
          <h2>Dicas Gerais</h2>
          <Card>
            <p>Mantenha porções menores para reduzir a ingestão de calorias.</p>
            <p>
              Evite alimentos processados opte por alimentos frescos e naturais
              em vez de processados..
            </p>
            <p>
              Aumente o consumo de vegetais e frutas são ricos em fibras,
              vitaminas e minerais.
            </p>
            <p>Beba água regularmente para se manter hidratado.</p>
            <p>
              Além da dieta, a prática regular de exercícios é essencial para
              perda de peso.
            </p>
            <p>A chave para a perda de peso é a consistência e a moderação. </p>
          </Card>
        </section>
      )}
      {imcValue > 30 && (
        <section>
          <button className={classes.getBackButton} onClick={onGetBachHandler}>
            Voltar
          </button>
          <h2>Refeições Principais</h2>
          <Card>
            <h3>Café da manhã</h3>
            <p>
              Aveia ou cereal integral com leite desnatado ou iogurte natural
              (baixo teor de gordura).
            </p>
            <p>Frutas frescas, como maçã, laranja, pêssego ou melancia.</p>
          </Card>
          <Card>
            <h3>Lanche da manhã:</h3>
            <p>Um punhado de nozes, como amêndoas ou nozes do Brasil.</p>
            <p>Um pedaço de queijo branco com algumas bolachas integrais.</p>
          </Card>
          <Card>
            <h3>Almoço</h3>
            <p>Peito de frango ou peixe grelhado.</p>
            <p>Salada de folhas verdes, tomate, pepino e pimentão.</p>
            <p>Quinoa ou arroz integral em pequenas porções.</p>
          </Card>
          <Card>
            <h3>Lanche da tarde:</h3>
            <p>
              Iogurte grego desnatado com algumas frutas vermelhas ou uma
              pequena porção de granola.
            </p>
            <p>Palitos de cenoura ou pepino com hummus.</p>
          </Card>
          <Card>
            <h3>Jantar</h3>
            <p>Sopa de legumes com feijão ou lentilhas.</p>
            <p>Peixe ou tofu grelhado com legumes no vapor ou refogados.</p>
          </Card>
          <Card>
            <h3>Ceia (opcional):</h3>
            <p>Um chá de ervas ou uma fruta.</p>
          </Card>
          <h2>Dicas Gerais</h2>
          <Card>
            <p>
              Reduza o tamanho das porções para diminuir a ingestão calórica
              diária.
            </p>
            <p>Prefira alimentos integrais em vez de processados.</p>
            <p>
              Opte por carnes magras, laticínios com baixo teor de gordura e
              evite alimentos fritos.
            </p>
            <p>
              Inclua uma variedade de vegetais em suas refeições para aumentar a
              ingestão de fibras.
            </p>
            <p>Beba bastante água ao longo do dia para se manter hidratado.</p>
            <p>
              Além da alimentação, pratique exercícios regularmente, adaptados
              às suas capacidades e restrições físicas.
            </p>
          </Card>
        </section>
      )}
    </Fragment>
  );
};

export default Feed;
