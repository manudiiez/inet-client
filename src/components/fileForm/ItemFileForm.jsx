import React from 'react'
import styled from 'styled-components'
import useFetch from '../../hooks/useFetch';
import ItemFormList from './ItemFormList';
import { useParams } from "react-router-dom";

const ItemFileForm = ({ handleChange, loading, file, handleChangeList, handleClick }) => {

    return (
        <Container>
            <div className="container-lg">
                <div className="header">
                    <p>Crear ficha medica</p>
                    <p className="user"><span>Usuario:</span> manudiiez</p>
                </div>
                {
                    loading ? (
                        <p>Loading...</p>
                    ) : (
                        <form>
                            <div className='input-container'>
                                <label>Nombre y apellido</label>
                                <input type="text" name='fullname' onChange={handleChange} value={file.fullname} />
                            </div>
                            <div className='input-container--multi'>
                                <div>
                                    <label>Grupo sanguineo</label>
                                    <input type="text" name='blood' onChange={handleChange} />
                                </div>
                                <div>
                                    <label>Sexo</label>
                                    <input type="text" name='sex' onChange={handleChange} />

                                </div>
                                <div>
                                    <label>Altura</label>
                                    <input type="text" name='height' onChange={handleChange} />
                                </div>
                                <div>
                                    <label>Peso</label>
                                    <input type="text" name='weight' onChange={handleChange} />
                                </div>
                            </div>
                            <div className='input-container'>
                                <label>Presion</label>
                                <input type="text" name='pressure' onChange={handleChange} />
                            </div>
                            <div className='input-container'>
                                <label>Enfermedades</label>
                                <input type="text" name='diseases' onChange={handleChange} />
                            </div>
                            <div className='input-container'>
                                <label>Area</label>
                                <ItemFormList uri='area' handleChange={handleChangeList} />
                            </div>
                            <div className='input-container'>
                                <label>Encargado</label>
                                <ItemFormList uri='user/get/medico' handleChange={handleChangeList} />
                            </div>


                            <div className='input-container'>
                                <label>Observaciones</label>
                                <textarea rows="10" name='observations' onChange={handleChange}></textarea>
                            </div>
                            <button type='submit' onClick={handleClick}>Crear</button>
                        </form>
                    )
                }
            </div>
        </Container>
    )
}

export default ItemFileForm

const Container = styled.div`
    padding: 0 14px;
    .container-lg{
        box-sizing: border-box;
        width: 100%;
        max-width: 1000px;
        margin: auto;
        padding: 70px 0;
        .header{
            box-sizing: border-box;
            margin-bottom: 28px;
            padding: 14px 28px;
            width: 100%;
            border-radius: 10px;
            box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            p{
                font-size: 21px;
            }

            .user{
                font-size: 18.2px;
                span{
                    color: #6150FF;
                }
            }
        }

        form{
            margin-bottom: 28px;
            padding: 28px;
            width: 100%;
            box-sizing: border-box;

            border-radius: 10px;
            box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
            .select{
                margin-bottom: 14px;
            }
            .input-container{
                display: flex;
                flex-direction: column;
                margin-bottom: 24px;
                label{
                    font-size: 14px;
                    margin-bottom: 14px;
                    color: #6150FF;
                }
                input{
                    border: none;
                    border-radius: 10px;
                    padding: 14px;
                    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
                }
                
                textarea{
                    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
                    border: none;
                    border-radius: 10px;
                    padding: 14px;
                }

            }
            .input-container--multi{
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 14px;
                width: 100%;
                box-sizing: border-box;
                margin-bottom: 24px;

                @media (max-width: 902px) {
                    grid-template-columns: repeat(2, 1fr);
                }
                @media (max-width: 600px) {
                    grid-template-columns: repeat(1, 1fr);
                }

                div{
                    display: flex;
                    flex-direction:column;
                    label{
                        font-size: 14px;
                        margin-bottom: 14px;
                        color: #6150FF;
                    }
                    input{
                        border: none;
                        border-radius: 10px;
                        padding: 14px;
                        box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
                    }
                }

            }
            button{
                width: 100%;
                max-width: 200px;
                padding: 14px;
                border: none;
                border-radius: 10px;
                color: #6150FF;
                background-color: #F3F1FD;
                cursor: pointer;
                transition: all .3s ease-in-out;
                &:hover{
                    background-color: #6150FF;
                    color: #F3F1FD;
                }
            }
            
        }
    }

`