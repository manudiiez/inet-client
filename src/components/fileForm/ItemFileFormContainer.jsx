import React, { useEffect, useState } from 'react'
import ItemFileForm from './ItemFileForm'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import useFetch from '../../hooks/useFetch';
import { useParams } from "react-router-dom";
import { uri } from '../../utils/uri';

const ItemFileFormContainer = () => {
  const { id } = useParams()
  const { data, loading, reFetch } = useFetch(`/person/${id}`);
  const [file, setFile] = useState({});

  const navigate = useNavigate()


  const handleChange = (e) => {
    setFile((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleChangeList = (e, id) => {
    setFile((prev) => ({ ...prev, [`${id === 'user/get/medico' ? 'manager' : 'areaName'}`]: e.value }));
  };


const handleClick = async (e) => {
  e.preventDefault()
  if (file.fullname.length !== 0 || file.weight.length !== 0 || file.height.length !== 0 || file.pressure.length !== 0 || file.areaName.length !== 0 || file.manager.length !== 0 || file.diseases.length !== 0 || file.observations.length !== 0) {
    try {
      await axios.post(`${uri}/file/${id}`, file);
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }
};

useEffect(() => {
  setFile({
    fullname: `${data.name} ${data.lastname}`
  })
}, [data])

return (
  <ItemFileForm handleChange={handleChange} handleClick={handleClick} data={data} loading={loading} file={file} handleChangeList={handleChangeList} />
)
}

export default ItemFileFormContainer