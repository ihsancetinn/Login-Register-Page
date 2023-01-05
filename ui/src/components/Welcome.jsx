import axios from "axios";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Welcome = () => {
  const [name, setName] = useState();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/user/${id}`)
      .then(({ data }) => setName(data.name))
      .catch((error) => console.error(error));
  }, [id]);
  return <div className={styles.welcome}>
    <h3> {name ? `Tebrikler ${name} !`:`Nasılsınız ?`} </h3>
    <h2> {name ? 'Başarılı bir şekilde giriş yaptınız':'Seni izliyoruz'}</h2>
    <div className={styles.buttons}>
      <button onClick={()=>navigate('/login')}>Login</button>
      <button onClick={()=>navigate('/register')}>Register</button>
      <button onClick={()=>navigate('/login')}>Sign Up</button>
      
    </div>
  </div>;
};

export default Welcome;
