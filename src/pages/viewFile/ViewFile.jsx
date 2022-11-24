import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components'
import ItemNavbarContainer from '../../components/navbar/ItemNavbarContainer';
import useFetch from '../../hooks/useFetch';
import { DataGrid } from '@mui/x-data-grid';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import SearchIcon from '@mui/icons-material/Search';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import ModalContainer from './ModalContainer';

const ViewFile = () => {

    const { id } = useParams()
    const { data, loading, reFetch } = useFetch(`/file/person/${id}`);

    const [fileId, setFileId] = useState('');

    const [open, setOpen] = useState(false);
    const handleOpen = (idFile) => {
        setOpen(true)
        setFileId(idFile)
    };
    const handleClose = () => setOpen(false);


    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'fullname', headerName: 'Nombre completo', width: 200 },
        { field: 'manager', headerName: 'Medico a cargo', width: 200 },
        {
            field: "action",
            headerName: "Archivo",
            width: 200,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/fileview/" + id} className='userListDelete'>
                            <Button variant="outlined" onClick={() => handleOpen(params.row.id)}>
                                Ver
                                <VisibilityIcon />
                            </Button>
                        </Link>

                    </>
                );
            },
        },
    ];

    return (
        <Container>
            <ItemNavbarContainer />
            {
                loading ? (
                    <p>Loading...</p>
                ) : (
                    <DataGrid
                        rows={data}
                        disableSelectionOnClick
                        columns={columns}
                        pageSize={8}
                        checkboxSelection
                        className='datagrid'
                    />
                )
            }

            <ModalContainer open={open} id={fileId} handleOpen={handleOpen} handleClose={handleClose} />
        </Container>
    )
}

export default ViewFile

const Container = styled.div`
    height: 400px;


`