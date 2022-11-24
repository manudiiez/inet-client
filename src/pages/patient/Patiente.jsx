import React, { useState } from 'react'
import styled from 'styled-components'
import { useToast } from '../../context/ToastContext'
import Swal from 'sweetalert2'
import axios from 'axios'
import { useAuth } from '../../context/AuthContext'
import { uri } from '../../utils/uri'

const Patiente = () => {

    const { user } = useAuth()
    console.log(user);
    const { createAlert } = useToast()

    const handleSubmit = async (type, origin) => {
        try {
            const alert = {
                type: type,
                origin: origin,
                fullname: user.username,
                startdate: new Date()
            }
            const res = await axios.post(`${uri}/alert/`, alert);
            console.log(res);

        } catch (err) {
            console.log(err)
        }
    }


    const handleClick = () => {
        Swal.fire({
            title: 'Pedir ayuda?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'No',
            confirmButtonText: 'Si!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Tipo de ayuda',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Normal',
                    cancelButtonText: 'Emergencia',
                    cancelButtonColor: '#d33',

                    reverseButtons: true
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire({
                            title: 'Ubicacion actual',
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonText: 'Baño',
                            cancelButtonText: 'Cama',
                            cancelButtonColor: '#sss',

                            reverseButtons: true
                        }).then((result) => {
                            if (result.isConfirmed) {
                                Swal.fire({
                                    title: 'Alerta normal en el baño emitida',
                                    icon: 'success',
                                })
                                createAlert('Necesitan ayuda en el baño')
                                handleSubmit('normal', 'baño')

                            } else if (
                                /* Read more about handling dismissals below */
                                result.dismiss === Swal.DismissReason.cancel
                            ) {
                                Swal.fire({
                                    title: 'Alerta normal en la cama emitida',
                                    icon: 'success',
                                })
                                createAlert('Necesitan ayuda en la cama')
                                handleSubmit('normal', 'cama')
                            }
                        })
                    } else if (
                        /* Read more about handling dismissals below */
                        result.dismiss === Swal.DismissReason.cancel
                    ) {
                        Swal.fire({
                            title: 'Ubicacion actual',
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonText: 'Baño',
                            cancelButtonText: 'Cama',
                            cancelButtonColor: '#sss',

                            reverseButtons: true
                        }).then((result) => {
                            if (result.isConfirmed) {
                                Swal.fire({
                                    title: 'Alerta urgente en el baño emitida',
                                    icon: 'success',
                                })
                                createAlert('Necetitan ayuda urgente en la baño')
                                handleSubmit('urgente', 'baño')

                            } else if (
                                /* Read more about handling dismissals below */
                                result.dismiss === Swal.DismissReason.cancel
                            ) {
                                Swal.fire({
                                    title: 'Alerta urgente en la cama emitida',
                                    icon: 'success',
                                })
                                createAlert('Necetitan ayuda urgente en la cama')
                                handleSubmit('urgente', 'cama')

                            }
                        })
                    }
                })
            }
        })
    }
    return (
        <Container>
            <button onClick={handleClick}>Ayuda</button>
        </Container>
    )
}

export default Patiente

const Container = styled.div`
    height: fit-content;
    padding: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    button{
        width: 100%;
        height: 500px;
        background: #6150FF;
        border: none;
        border-radius: 10px;
        color: #fff;
    }

`