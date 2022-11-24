import React from 'react'
import useFetch from '../../hooks/useFetch'
import ItemPersonList from './ItemPersonList';



const ItemPersonListContainer = () => {

    const { data, loading, reFetch } = useFetch(`/person`);
    
    return (
        <ItemPersonList data={data} loading={loading} reFetch={reFetch} />
    )
}

export default ItemPersonListContainer