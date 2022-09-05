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
import { postdoctor } from '../../Redux/Action/doctor.action';
import { useDispatch } from 'react-redux';

function Categ_admin(props) {
    const [open, setOpen] = useState(false);
    const [udata, setUdata] = useState(false);
    const dispatch = useDispatch();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    let schema = yup.object().shape({
        category_name: yup.string().required("Please Enter Category Name"),
        category_price: yup.string().required("Please Enter Category Price"),
        url: yup.mixed().required("Please Upload Image"),
    });

    const formik = useFormik({
        initialValues: {
            category_name: '',
            category_price: '',
            url: '',
        },
        validationSchema: schema,
        onSubmit: (values, { resetForm }) => {

            console.log(values);

            if(udata){
                USetData(values);
                resetForm();

            } else {
                console.log(values);
                const {
                    category_name,
                    category_price,
                    url
                } = values;
                let Emp_Data = {
                    id: Math.floor(Math.random() * 1000),
                    category_name,
                    category_price,
                    url
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

                console.log(Emp_Data);
                setOpen(false);

                getEData();
                // toast.success("Employee Data Successfully Add.")
                resetForm();
        }
        },
    });

    const getEData = () => {
        // const getEDataItem = JSON.parse(localStorage.getItem("employee"));

        // if (getEDataItem !== null) {
        //     setEShowData(getEDataItem);
        // }
        // setEShowData(doctor.doctor);

    }

    const USetData = (values) => {

        // console.log(values);
        // let upData = JSON.parse(localStorage.getItem("employee"));
        // console.log(upData);

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

        // dispatch(updataDoctor(Udata));
        // setOpen(false);
        // getEData();     
        // toast.success("Updata Successfully.")
    }



    return (
        <div className="container">
            <div className='admin_cont'>
                <div className='add_category'>
                    <Button onClick={handleClickOpen} variant="contained">Add Category</Button>
                </div>
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
                            <TextField
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
        </div>
    );
}

export default Categ_admin;