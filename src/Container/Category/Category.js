import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from 'reactstrap';
import { Form, Formik, useFormik } from 'formik';
import * as yup from 'yup';



function Category(props) {
    const [open, setOpen] = React.useState(false);
    const [udata, setUdata] = useState(false);

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
                    category_price
                }
                // let employeeData = JSON.parse(localStorage.getItem('employee'));

                // if (employeeData == null) {
                //     localStorage.setItem('employee', JSON.stringify([Emp_Data]));
                // } else {
                //     employeeData.push(Emp_Data)
                //     localStorage.setItem('employee', JSON.stringify(employeeData));
                // }

                // dispatch(postdoctor(Emp_Data))
                // dispatch(postdoctor(values))

                // console.log(Emp_Data);
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
        <>
        <div className="container">
            <div className='add_category'>
                <button onClick={handleClickOpen}>Add Category</button>
            </div>
            <div className="category_section">
                <div className="row">
                    <div className="col-lg-2 col-sm-12">
                        <h1 className="category_text">Category</h1>
                    </div>
                    <div className="col-lg-10 col-sm-12 main">
                        <div className="col">
                            <div className="box_main">
                                <div className="icon_1" />
                                <h4 className="fashion_text active">Mobiles</h4>
                            </div>
                        </div>
                        <div className="col">
                            <div className="box_main">
                                <div className="icon_2" />
                                <h4 className="fashion_text">Fashion</h4>
                            </div>
                        </div>
                        <div className="col">
                            <div className="box_main">
                                <div className="icon_3" />
                                <h4 className="fashion_text">Watches</h4>
                            </div>
                        </div>
                        <div className="col">
                            <div className="box_main">
                                <div className="icon_4" />
                                <h4 className="fashion_text">Appliances</h4>
                            </div>
                        </div>
                        <div className="col">
                            <div className="box_main">
                                <div className="icon_5" />
                                <h4 className="fashion_text">Electronics</h4>
                            </div>
                        </div>
                        <div className="col">
                            <div className="box_main">
                                <div className="icon_5" />
                                <h4 className="fashion_text">All</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="category_section_2">
                <div className="row">
                    <div className="col-lg-4 col-sm-12">
                        <div className="beds_section active">
                            <div><img src="assets/images/img-2.png" className="image_2" /></div>
                            <h1 className="bed_text">Up to 50% off | Beds</h1>
                            <p>Categorie : Mobile</p>
                            <div className="seemore_bt"><a href="#">see More</a></div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <div className="beds_section">
                            <div><img src="assets/images/img-3.png" className="image_2" /></div>
                            <h1 className="bed_text">organized in style</h1>
                            <p>Categorie : Watche</p>
                            <div className="seemore_bt"><a href="#">see More</a></div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <div className="beds_section">
                            <div><img src="assets/images/img-4.png" className="image_2" /></div>
                            <h1 className="bed_text">Refurbished mixer</h1>
                            <p>Categorie : Appliance</p>
                            <div className="seemore_bt"><a href="#">see More</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Category;