import React from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import useFetch from '../../hooks/useFetch';
import { Button } from '@mui/material';
import axios from 'axios';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ModalContainer = ({ open, handleClose, handleOpen, id }) => {

    const { data, loading, reFetch } = useFetch(`/file/${id}`);

    return (
        <Modal
            keepMounted
            open={open}
            onClose={handleClose}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
        >
            <Box sx={style}>
                {
                    loading ? (
                        <p>loading...</p>
                    ) : (
                        <Box>
                            <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                                {data.fullname}
                            </Typography>
                            <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                                Medico a cargo: {data.manager}
                            </Typography>
                            <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                                Area: {data.areaName}
                            </Typography>
                            <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                                Altura: {data.height}cm
                            </Typography>
                            <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                                Peso: {data.weight}kg
                            </Typography>
                            <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                                Genero: {data.sex}
                            </Typography>
                            <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                                Presion sanguinea: {data.pressure}
                            </Typography>
                            <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                                Sangre: {data.blood}
                            </Typography>
                            <Typography id="keep-mounted-modal-description" sx={{ mt: 4 }}>
                                Observaciones: {data.observations}
                            </Typography>
                        </Box>
                    )
                }
            </Box>
        </Modal>
    )
}

export default ModalContainer