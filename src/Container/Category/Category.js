import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from 'reactstrap';
import { Form, Formik, useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { getdoctor } from '../../Redux/Action/doctor.action';
import { getproduct } from '../../Redux/Action/product.action';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';



function Category(props) {
    const [open, setOpen] = React.useState(false);
    const [udata, setUdata] = useState(false);
    const dispatch = useDispatch();
    const [showCategory, setShowCategory] = useState([]);
    const doctor = useSelector(state => state.doctor)
    const products = useSelector(state => state.product);
    const product = products.product; 
    const [filterProduct, setFilterProduct] = useState([]);
    const history = useHistory();

    console.log("filterProduct", filterProduct);

    const handleCategory = (e) => {
        let fData = [];

        if(e === "All"){
            setFilterProduct([]);
          }
          
        product.filter((p) => {
            if(e === p.product_list){
                fData.push(p);
              }
            })
            setFilterProduct(fData);
    };

    const filterData = filterProduct.length > 0 ? filterProduct : product;



    const handleClose = () => {
        setOpen(false);
    };

    let schema = yup.object().shape({
        category_name: yup.string().required("Please Enter Category Name"),
        category_price: yup.string().required("Please Enter Category Price"),
        url: yup.mixed().required("Please Upload Image"),
    });

    useEffect(() => {
        dispatch(getdoctor());
        dispatch(getproduct());
    }, [])

    const formik = useFormik({
        initialValues: {
            category_name: '',
            category_price: '',
            url: '',
        },
        validationSchema: schema,
        onSubmit: (values, { resetForm }) => {

            if (udata) {
                USetData(values);
                resetForm();

            } else {
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
        setShowCategory(doctor.doctor)

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

    const handleProductDetails = (e) => {
        history.push('/product-details',e)
    }



    return (
        <>
            <div className="container">
                <div className="category_section">
                    <div className="row">
                        <div className="col-lg-2 col-sm-12">
                            <h1 className="category_text">Category</h1>
                        </div>

                        <div className="col-lg-10 col-sm-12 main">
                            <div className="col">
                                <a href='javascript:' onClick={(e) => handleCategory("All")}>
                                    <div className="box_main">
                                        <div className="icon_1" />
                                        <h4 className="fashion_text">All</h4>
                                    </div>
                                </a>
                            </div>
                            {
                                doctor.doctor.map((d) => {
                                    return (
                                        <div className="col">
                                            <a href='javascript:' onClick={(e) => handleCategory(d.id)}>
                                                <div className="box_main">
                                                    <div className="icon_1">
                                                        <img src={d.url} />
                                                    </div>
                                                    <h4 className="fashion_text active">{d.category_name}</h4>
                                                </div>
                                            </a>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="category_section_2">
                    <div className="row">
                        {
                            filterData.map((productData) => (
                                <div className="col-lg-4 col-sm-12" id={productData.product_list}>
                                    {/* <a href={`product-details/${productData.id}`}> */}
                                    <a href={''} onClick={() => handleProductDetails(productData)}>
                                        <div className="beds_section active">
                                            <div><img src={productData.url} className="image" /></div>
                                            <h1 className="bed_text">{productData.product_name}</h1>
                                            <p className="Categorie_type">Price : {productData.product_price}</p>
                                            <p className="description">{productData.product_description}</p>
                                        </div>
                                    </a>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Category;