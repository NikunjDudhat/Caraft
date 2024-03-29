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
import { getdoctor } from '../../Redux/Action/doctor.action';
import { useDispatch, useSelector } from 'react-redux';
import { FormControl, IconButton, InputLabel, MenuItem, Select } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect } from 'react';
import { deleteproduct, getproduct, postproduct, updataproduct } from '../../Redux/Action/product.action';

function Product_admin(props) {
    const [open, setOpen] = useState(false);
    const [Dopen, setDOpen] = useState(false);
    const [udata, setUdata] = useState(false);
    const [Did, setDid] = useState('');
    // const [fileName, setfileName] = useState('');
    const dispatch = useDispatch();
    const [showData, setEShowData] = useState([]);
    const doctor = useSelector(state => state.doctor);
    const product = useSelector(state => state.product);
    const categoryData = doctor.doctor;
    const [categoryID, setCategoryID] = useState('');
    const [Edit, setEdit] = useState(false);
    // const cateID = () => {

    // }
    // cateID();
    // const a = product.product.map((m) => m.id)
    // const doctorFilter = doctor.doctor;

    // const FData = doctorFilter.filter((d) => {
    //     if(d.id === a){
    //     }
    // })



    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setUdata(false);
        formik.resetForm();
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
        // formik.setFieldValue("product_list", params.row.product_list)

        setDid(params.id);
        setUdata(true);
        setEdit(true);
        // setfileName(params.row.fileName);
        // EditData(id);
        // setEditdata(id);
    };

    let schema = yup.object().shape({
        product_name: yup.string().required("Please Enter Product Name"),
        product_price: yup.string().required("Please Enter Product Price"),
        product_list: yup.string().required("Please Select Product"),
        product_description: yup.string().required("Please Enter Product"),
        url: yup.mixed().required("Please Upload Image"),
    });

    const formik = useFormik({
        initialValues: {
            product_name: '',
            product_price: '',
            product_list: '',
            product_description: '',
            url: '',
        },
        validationSchema: schema,
        onSubmit: (values, { resetForm }) => {
            if (udata) {
                USetData(values);
                resetForm();

            } else {
                dispatch(postproduct(values))
                setOpen(false);

                getEData();
                // toast.success("Employee Data Successfully Add.")
                resetForm();
            }
        },
    });

    const handleDelete = () => {
        dispatch(deleteproduct(Did))
        setDOpen(false);
        getEData();
    }

    const USetData = (values) => {

        dispatch(updataproduct(values));
        setOpen(false);
        getEData();
    }

    const getEData = () => {
        setEShowData(doctor.doctor);
    }

    useEffect(() => {
        dispatch(getdoctor())
        dispatch(getproduct())
        getEData();
    }, [])



    let columns = [
        { field: 'product_name', headerName: 'Product Name', width: 130 },
        { field: 'product_price', headerName: 'Product Price', width: 130 },
        {
            field: 'product_list', headerName: 'Product Type', width: 130,
            renderCell: (params) => (

                categoryData.map((d) => {
                    setCategoryID(params.formattedValue);
                    if (d.id === params.formattedValue) {
                        return <div>{d.category_name}</div>
                    }
                })
            )
        },
        { field: 'product_description', headerName: 'Product Description', width: 130 },
        {
            field: 'url', headerName: 'Image', width: 130,
            renderCell: (params) => (
                <img src={params.row.url} style={{ width: "50px", height: "50px", borderRadius: "50%", margin: "auto" }} />
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
                    <Button onClick={handleClickOpen} variant="contained">Add Product</Button>
                </div>
            </div>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={product.product}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                // checkboxSelection
                />
            </div>

            <Dialog open={open} onClose={handleClose}>
                <Formik value={formik}>
                    <Form key={formik} onSubmit={formik.handleSubmit}>
                        <DialogTitle>Add Product</DialogTitle>
                        <DialogContent>
                            <TextField
                                autoFocus
                                margin="dense"
                                name='product_name'
                                id="product_name"
                                label="product Name"
                                type="text"
                                value={formik.values.product_name}
                                fullWidth
                                variant="standard"
                                onChange={formik.handleChange}
                                className="inputBox"
                            />
                            {
                                formik.errors.product_name ?
                                    <p className='error'>{formik.errors.product_name}</p> : null
                            }
                            <TextField
                                autoFocus
                                margin="dense"
                                id="product_price"
                                label="product Price"
                                name='product_price'
                                type="text"
                                value={formik.values.product_price}
                                fullWidth
                                variant="standard"
                                onChange={formik.handleChange}
                                className="inputBox"
                            />
                            {
                                formik.errors.product_price ?
                                    <p className='error'>{formik.errors.product_price}</p> : null
                            }
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Catagory Type</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="product_list"
                                    label="product_list"
                                    key="product_list"
                                    name="product_list"
                                    onChange={formik.handleChange}
                                    value={formik.values.product_list}
                                    className="inputBox"
                                >

                                    {
                                    categoryData.map((d) => (
                                        <MenuItem value={d.id}>{d.category_name}</MenuItem>
                                    ))
                                }
                                </Select>
                            </FormControl>
                            {
                                formik.errors.product_list ?
                                    <p className='error'>{formik.errors.product_list}</p> : null
                            }
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
                                className="inputBox"
                            />
                            {
                                formik.errors.url ?
                                    <p className='error'>{formik.errors.url}</p> : null
                            }
                            <TextField
                                autoFocus
                                margin="dense"
                                id="product_description"
                                label="product description"
                                name='product_description'
                                type="text"
                                value={formik.values.product_description}
                                fullWidth
                                variant="standard"
                                onChange={formik.handleChange}
                                className="inputBox"
                            />
                            {
                                formik.errors.product_description ?
                                    <p className='error'>{formik.errors.product_description}</p> : null
                            }
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type='submit'>{udata ? "Save" : "Add"}</Button>
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

export default Product_admin;