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

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickDOpen = (id) => {
        setDid(id)
        setDOpen(true);
    };

    const handleClickEOpen = (params) => {

        setOpen(true);
        formik.setValues({
            ...params.row,
            url: params.row.url,
        })

        setDid(params.id);
        setUdata(true);
        // setfileName(params.row.fileName);
        // EditData(id);
        // setEditdata(id);
    };

    let schema = yup.object().shape({
        category_name: yup.string().required("Please Enter Category Name"),
        url: yup.mixed().required("Please Upload Image"),
        // category_price: yup.string().required("Please Enter Category Price"),
        // category_list: yup.string().required("Please Select Category"),
    });

    const formik = useFormik({
        initialValues: {
            category_name: '',
            url: '',
            // category_price: '',
            // category_list: ''
        },
        validationSchema: schema,
        onSubmit: (values, { resetForm }) => {

            if(udata){
                USetData(values);
                resetForm();

            } else {
                const {
                    category_name,
                    url,
                    // category_price,
                    // category_list
                } = values;
                let Emp_Data = {
                    id: Math.floor(Math.random() * 1000),
                    category_name,
                    url,
                    // category_price,
                    // category_list
                }
                // let employeeData = JSON.parse(localStorage.getItem('employee'));

                // if (employeeData == null) {
                //     localStorage.setItem('employee', JSON.stringify([Emp_Data]));
                // } else {
                //     employeeData.push(Emp_Data)
                //     localStorage.setItem('employee', JSON.stringify(employeeData));
                // }

                // dispatch(postdoctor(Emp_Data))
                dispatch(postdoctor(values))
                setOpen(false);

                getEData();
                // toast.success("Employee Data Successfully Add.")
                resetForm();
        }
        },
    });

    const handleDelete = () => {

        // let getDataItem = JSON.parse(localStorage.getItem("employee"));

        // let GFilter = getDataItem.filter((g, i) => g.id !== Did)

        // localStorage.setItem("employee", JSON.stringify(GFilter))

        dispatch(deleteDoctor(Did))
        // toast.success("Data Deleted Successfully.")
        setDOpen(false);
        getEData();
    }

    const USetData = (values) => {
        // let upData = JSON.parse(localStorage.getItem("employee"));

        // let saveData = upData.map((u) => {
        //     if(u.id === Did){
        //         return(
        //             values
        //         )
        //     }else{
        //         return(
        //             u
        //         )
        //     }

        // })
        // localStorage.setItem("employee", JSON.stringify(saveData));
        // let Udata = {
        //     fileName: fileName,
        //     ...values
        // }

        dispatch(updataDoctor(values));
        setOpen(false);
        getEData();     
        // toast.success("Updata Successfully.")
    }

    const getEData = () => {
        // const getEDataItem = JSON.parse(localStorage.getItem("employee"));

        // if (getEDataItem !== null) {
        //     setEShowData(getEDataItem);
        // }
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
            
        <Dialog open={open} onClose={handleClose}>
                <Formik value={formik}>
                    <Form key={formik} onSubmit={formik.handleSubmit}>
                        <DialogTitle>Add Category</DialogTitle>
                        <DialogContent>
                            <TextField
                                autoFocus
                                margin="dense"
                                name='category_name'
                                id="category_name"
                                label="Category Name"
                                type="text"
                                value={formik.values.category_name}
                                fullWidth
                                variant="standard"
                                onChange={formik.handleChange}
                            />
                            {
                                formik.errors.category_name ?
                                    <p className='error'>{formik.errors.category_name}</p> : null
                            }
                            {/* <TextField
                                autoFocus
                                margin="dense"
                                id="category_price"
                                label="Category Price"
                                name='category_price'
                                type="text"
                                value={formik.values.category_price}
                                fullWidth
                                variant="standard"
                                onChange={formik.handleChange}
                            />
                            {
                                formik.errors.category_price ?
                                    <p className='error'>{formik.errors.category_price}</p> : null
                            } */}
                            {/* <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Catagory Type</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={formik.values.category_list}
                                    label="Age"
                                    name="category_list"
                                    onChange={formik.handleChange}
                                >
                                    <MenuItem value={"Mobiles"}>Mobiles</MenuItem>
                                    <MenuItem value={"Fashion"}>Fashion</MenuItem>
                                    <MenuItem value={"Watches"}>Watches</MenuItem>
                                    <MenuItem value={"Appliances"}>Appliances</MenuItem>
                                    <MenuItem value={"Electronics"}>Electronics</MenuItem>
                                </Select>
                            </FormControl>
                            {
                                formik.errors.category_list ?
                                    <p className='error'>{formik.errors.category_list}</p> : null
                            } */}
                            <input
                                autoFocus
                                margin="dense"
                                id="uploadFile"
                                label="Upload File"
                                name='url'
                                type="file"
                                fullWidth
                                variant="standard"
                                onChange={e => formik.setFieldValue('url', e.target.files[0])}
                            />
                            {
                                formik.errors.url ?
                                    <p className='error'>{formik.errors.url}</p> : null
                            }
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type='submit'>Add</Button>
                        </DialogActions>
                    </Form>
                </Formik>
            </Dialog>

            <Dialog
                open={Dopen}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Are You Sure Delete Data !"}
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose}>No</Button>
                    <Button onClick={() => handleDelete()} autoFocus>Yes</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Categ_admin;