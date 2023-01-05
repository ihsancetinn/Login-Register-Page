import {  Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Register from "./components/Register";
import Login from "./components/Login";
import styles from "./App.module.scss"

const App = () => {
  return (
  
      <div className={styles.container}>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/welcome/:id" element={<Welcome />} />
        </Routes>
      </div>
   
  );
};

export default App;

// https://www.youtube.com/watch?v=Z4Fmx3v6U2U  11:17
