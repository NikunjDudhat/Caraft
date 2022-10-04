import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from 'reactstrap';
import { Form, Formik, useFormik } from 'formik';
import * as yup from 'yup';
import { deleteDoctor, getdoctor, postdoctor, updataDoctor } from '../../Redux/Action/doctor.action';
import { useDispatch, useSelector } from 'react-redux';
import { FormControl, IconButton, InputLabel, MenuItem, Select } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect } from 'react';

function Categ_admin(props) {
    const [open, setOpen] = useState(false);
    const [Dopen, setDOpen] = useState(false);
    const [udata, setUdata] = useState(false);
    const [Did, setDid] = useState('');
    // const [fileName, setfileName] = useState('');
    const dispatch = useDispatch();
    const [showData, setEShowData] = useState([]);
    const doctor = useSelector(state => state.doctor)

    const getEData = () => {
        setEShowData(doctor.doctor);
    }

    useEffect(() => {
        dispatch(getdoctor())
        getEData();
    }, [])



    let columns = [
        { field: 'category_name', headerName: 'Category Name', width: 130 },
        // { field: 'category_price', headerName: 'Category Price', width: 130 },
        // { field: 'category_list', headerName: 'Category Type', width: 130 },
        { field: 'url', headerName: 'Image', width: 130,
            renderCell: (params) => (
                    <img src={params.row.url} style={{width: "50px",height: "50px", borderRadius: "50%", margin: "auto"}} />
                )
        },
        {
            field: 'action', headerName: 'Action', width: 130,
            renderCell: (params) => {
                return (
                    <>
                        <IconButton onClick={() => handleClickDOpen(params.row)} aria-label="delete">
                            <DeleteIcon />
                        </IconButton>

                        <IconButton onClick={() => handleClickEOpen(params)} aria-label="Edit">
                            <EditIcon />
                        </IconButton>
                    </>
                )
            }

        },
    ]



    return (
        <div className="container">
            <div className='admin_cont'>
                <div className='add_category'>
                    <Button onClick={handleClickOpen} variant="contained">Add Category</Button>
                </div>
            </div>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={doctor.doctor}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    // checkboxSelection
                />
            </div>
        </div>
    );
}

export default Categ_admin;