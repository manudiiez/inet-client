import React from 'react'
import Select from 'react-select'
import useFetch from '../../hooks/useFetch';


const ItemFormList = ({uri, handleChange}) => {

    const { data, loading, reFetch } = useFetch(`/${uri}`);
    

    const structureData = (arr) => {
        const list = arr.map(obj => {
            const newObj = {
                value: uri === 'user/get/medico' ? obj.idPersona : obj.name,
                label: uri === 'user/get/medico' ? obj.idPersona : obj.name ,
                id: obj.id
            }
            return newObj
        })

        return list
    }

    return (
        <Select className='select' onChange={(e) => {handleChange(e, uri)}} options={structureData(data)} />
    )
}

export default ItemFormList