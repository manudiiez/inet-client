import { useContext, useState } from 'react'
/* ---------------------------- react-router-dom ---------------------------- */
import { useNavigate } from 'react-router-dom';
/* ---------------------------------- AXIOS --------------------------------- */
import axios from 'axios'
/* --------------------------------- CONTEXT -------------------------------- */
import { AuthContext } from "../../context/AuthContext";
/* ------------------------------- COMPONENTS ------------------------------- */
import ItemSignIn from './ItemSignIn'
import { uri } from '../../utils/uri';

const ItemSignInContainer = () => {
  /* --------------------------------- STATES --------------------------------- */
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined 
  });
  const navigate = useNavigate()
  /* ------------------------------ CONTEXT USER ------------------------------ */
  const { loading, error, dispatch } = useContext(AuthContext);
  
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(uri + "/user/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };


  return (
    <ItemSignIn handleChange={handleChange} handleClick={handleClick} loading={loading} error={error} />
  )
}

export default ItemSignInContainer