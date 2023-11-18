import React, { useEffect, useState } from "react";
import classes from "./Profile.module.css";

import axios from "axios";
import undefinedImage from "../../Imgs/profile_undefined.jpg";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { imcCalcActions } from "../../store/imc-slice";

const Profile = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const storedUserJSON = localStorage.getItem("foundUser");
  const loggedUser = JSON.parse(storedUserJSON);

  const imcValue = useSelector((state) => state.imcCalc.imc);

  const [key, setKey] = useState();
  const [age, setAge] = useState(loggedUser.age);
  const [imc, setImc] = useState(loggedUser.imc);
  const [image, setImage] = useState("");
  const [update, setUpdate] = useState();
  const [height, setHeight] = useState(loggedUser.height);
  const [weight, setWeight] = useState(loggedUser.weight);
  const [toggle, setToggle] = useState();
  const [errorAge, setErrorAge] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [errorWeight, setErrorWeight] = useState(false);
  const [errorHeight, setErrorHeight] = useState(false);
  const [imageChanged, setImageChanged] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [styleDisabled, setStyleDisabled] = useState(true);
  const [inputDisabled, setInputDisabled] = useState(true);
  const [isEditClicked, setIsEditClicked] = useState(false);

  useEffect(() => {
    setImc(imcValue);

    if (imcValue === 0) {
      const newStatus = async () => {
        const updatedUserData = {
          id: loggedUser.id,
          age: age,
          imc: loggedUser.imc,
          name: loggedUser.name,
          email: loggedUser.email,
          image: loggedUser.image,
          height: height,
          weight: weight,
          lastName: loggedUser.lastName,
          password: loggedUser.password,
        };

        setImc(loggedUser.imc);
        localStorage.setItem("foundUser", JSON.stringify(updatedUserData));

        try {
          await fetch(
            `https://react-http-f8211-default-rtdb.firebaseio.com/easyfit/${key}.json`,
            {
              method: "PUT",
              body: JSON.stringify(updatedUserData),
            }
          );
        } catch (error) {
          console.error(error);
        }
      };
      newStatus();
    } else {
      const newStatus = async () => {
        const updatedUserData = {
          id: loggedUser.id,
          age: age,
          imc: imcValue,
          name: loggedUser.name,
          email: loggedUser.email,
          image: loggedUser.image,
          height: height,
          weight: weight,
          lastName: loggedUser.lastName,
          password: loggedUser.password,
        };

        console.log(updatedUserData);
        localStorage.setItem("foundUser", JSON.stringify(updatedUserData));

        try {
          await fetch(
            `https://react-http-f8211-default-rtdb.firebaseio.com/easyfit/${key}.json`,
            {
              method: "PUT",
              body: JSON.stringify(updatedUserData),
            }
          );
        } catch (error) {
          console.error(error);
        }
      };
      newStatus();
    }
  }, [update]);

  useEffect(() => {
    if (loggedUser.hasOwnProperty("image")) {
      setIsChecked(true);
      setImage(loggedUser.image);
    } else {
      setIsChecked(false);
    }
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://react-http-f8211-default-rtdb.firebaseio.com/easyfit.json"
        );
        if (!response.ok) {
          throw new Error("Algo deu errado!");
        }
        const responseData = await response.json();
        const user = Object.values(responseData).find(
          (user) => user.email === loggedUser.email
        );
        if (user) {
          const userKey = Object.keys(responseData).find(
            (key) => responseData[key].email === loggedUser.email
          );
          setKey(userKey);
        } else {
          console.log("Usuário não encontrado");
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };
    fetchData();
  }, [toggle]);

  const onImageHandler = () => {
    setImageChanged(true);
  };

  const inputChange = (e) => {
    const image = e.target.files[0];
    setSelectedImage(image);
  };

  const onImageSubmitHandler = async (e) => {
    e.preventDefault();
    setImageChanged(false);

    if (!selectedImage) {
      console.error("Nenhuma imagem selecionada");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedImage);

    try {
      const response = await axios.post(
        "http://localhost:5000/uploadImage",
        formData
      );

      const image = response.data.message.path;

      const updatedUserData = {
        id: loggedUser.id,
        imc: loggedUser.imc,
        age: loggedUser.age,
        name: loggedUser.name,
        image: image,
        email: loggedUser.email,
        weight: loggedUser.weight,
        height: loggedUser.height,
        lastName: loggedUser.lastName,
        password: loggedUser.password,
      };

      try {
        await fetch(
          `https://react-http-f8211-default-rtdb.firebaseio.com/easyfit/${key}.json`,
          {
            method: "PUT",
            body: JSON.stringify(updatedUserData),
          }
        );

        const loggedUserJSON = JSON.stringify(updatedUserData);
        localStorage.setItem("foundUser", loggedUserJSON);

        setImage(image);
      } catch {}
    } catch (error) {
      console.error("Erro ao enviar imagem:", error);
    }
    setIsChecked(true);
    setToggle(!toggle);
  };

  const heightHandler = (event) => {
    const value = event.target.value;
    setHeight(value);
    if (value > 200 || value < 54) {
      setStyleDisabled(false);
      setErrorHeight(true);
    } else {
      setStyleDisabled(true);
      setErrorHeight(false);
    }
  };

  const ageHandler = (event) => {
    const value = event.target.value;
    setAge(value);
    if (value.length > 2 || value < 6) {
      setStyleDisabled(false);
      setErrorAge(true);
    } else {
      setStyleDisabled(true);
      setErrorAge(false);
    }
  };

  const weightHandler = (event) => {
    const value = event.target.value;
    setWeight(value);
    if (value > 600 || value < 25) {
      setStyleDisabled(false);
      setErrorWeight(true);
    } else {
      setStyleDisabled(true);
      setErrorWeight(false);
    }
  };

  const onConfirmButton = () => {
    dispatch(imcCalcActions.calc([weight, height]));
    setIsEditClicked(false);
    setInputDisabled(true);

    setUpdate(!update);
  };

  const onEditButton = () => {
    setInputDisabled(false);
    setIsEditClicked(true);
  };

  const onGetBackHandler = () => {
    navigation("/landingPage");
  };

  const onAboutHandler = () => {
    navigation("/aboutPage");
  };

  console.log(imc.toFixed(2));

  return (
    <section className={classes.section}>
      <div className={classes.divisor}>
        <div className={classes.buttonDiv}>
          <button onClick={onGetBackHandler} className={classes.getBackButton}>
            Voltar
          </button>
        </div>
        <div>
          <button onClick={onAboutHandler} className={classes.getBackButton}>
            Sobre
          </button>
        </div>
      </div>
      {isChecked && (
        <div>
          <img
            src={`http://localhost:5000/uploads/${image}`}
            className={classes.profileImg}
            alt="profile"
            onClick={onImageHandler}
          />
        </div>
      )}
      {!isChecked && (
        <div>
          <img
            src={undefinedImage}
            className={classes.profileImg}
            alt="profile undefined"
            onClick={onImageHandler}
          />
        </div>
      )}
      {imageChanged && (
        <form onSubmit={onImageSubmitHandler}>
          <input
            className={classes.profileInput}
            type="file"
            onChange={inputChange}
          />
          <button className={classes.confirmBtn}>Ok</button>
        </form>
      )}
      <h2 className={classes.profileUserName}>
        {loggedUser.name} {loggedUser.lastName}
      </h2>
      <div className={classes.itemContainer}>
        <h3 className={classes.profileStats}>
          Altura:
          <input
            value={height}
            disabled={inputDisabled}
            onChange={heightHandler}
            className={styleDisabled ? classes.input : classes.inputError}
          />
        </h3>
        <h3 className={classes.profileStats}>
          IMC:
          <input
            value={
              imc.toFixed(2) === 0.0
                ? loggedUser.imc.toFixed(2)
                : imc.toFixed(2)
            }
            disabled={true}
            className={classes.input}
          />
        </h3>
        <h3 className={classes.profileStats}>
          Idade :
          <input
            value={age}
            disabled={inputDisabled}
            onChange={ageHandler}
            className={styleDisabled ? classes.input : classes.inputError}
          />
        </h3>
        <h3 className={classes.profileStats}>
          Peso:
          <input
            value={weight}
            disabled={inputDisabled}
            onChange={weightHandler}
            className={styleDisabled ? classes.input : classes.inputError}
          />
        </h3>
      </div>
      {errorAge && (
        <p className={classes.errorMessage}>
          Idade não pode ser maior que 99 anos
        </p>
      )}
      {errorHeight && (
        <p className={classes.errorMessage}>
          Altura não pode ser maior que 2 metros nem menor que 54 centímetros
        </p>
      )}
      {errorWeight && (
        <p className={classes.errorMessage}>
          Peso não pode ser maior que 600 nem menor que 25
        </p>
      )}
      {isEditClicked && (
        <button
          onClick={onConfirmButton}
          className={styleDisabled ? classes.editBtn : classes.disabledBtn}
          disabled={!styleDisabled}
        >
          Confirmar
        </button>
      )}
      {!isEditClicked && (
        <button onClick={onEditButton} className={classes.editBtn}>
          Editar Status
        </button>
      )}
    </section>
  );
};

export default Profile;
