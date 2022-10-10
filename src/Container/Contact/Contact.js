import { DataGrid } from '@mui/x-data-grid';
import { useFormik, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import * as yup from 'yup';
import InputBox from '../../Components/InputBox/InputBox';

function Contact(props) {
    const [UserData, setUserData] = useState([]);

    let schema = yup.object().shape({
        name: yup.string().required('please enter your name'),
        phone: yup.number().required('please enter your phone no').positive().integer(),
        email: yup.string().email('please required email').required('please enter your email'),
        message: yup.string().required('please enter message')
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            email: '',
            message: '',
        },
        validationSchema: schema,
        onSubmit: (values, { resetForm }) => {
          let {
            name,
            phone,
            email,
            message,
          } = values;

          let Data = {
            id: Math.floor(Math.random() * 1000),
            name,
            email,
            phone,
            message
        }

        let localData = JSON.parse(localStorage.getItem('UserData'));

        if(localData == null){
            localStorage.setItem('UserData', JSON.stringify([Data]))
        }else{
            localData.push(Data);
            localStorage.setItem('UserData', JSON.stringify(localData))
        }

        resetForm();
        GetData();
        },
      });


      const {handleChange, handleSubmit, handleBlur, values, errors, touched } = formik;


      const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'phone', headerName: 'Phone', width: 130 },
        { field: 'email', headerName: 'Email', width: 130 },
        { field: 'message', headerName: 'Message', width: 130 },
      ];

      const GetData = () => {
        const getData = JSON.parse(localStorage.getItem("UserData"));

        if (getData !== null) {
            setUserData(getData);
        }
    }

    useEffect(() => {
        GetData();
    }, [])

    return (
        <div className="contact_section layout_padding">
            <div className="container">
                <h1 className="touch_taital">Contact Us</h1>
                <div className="contact_section_2">
                    <div className="row" style={{marginBottom: '30px'}}>
                        <div className="col-md-6">
                            <Formik values={formik}>
                                <form onSubmit={handleSubmit} className="email_text">
                                    <div className="form-group">
                                        <InputBox 
                                            type="text" 
                                            className="email-bt" 
                                            placeholder="Name" 
                                            name="name" 
                                            onChange={handleChange}
                                            value={values.name}
                                            error={Boolean(errors.name && touched.name)}
                                            errorMessage= {errors.name}
                                            onBlur={handleBlur}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <InputBox 
                                            type="number" 
                                            maxlength="10"
                                            className="email-bt" 
                                            placeholder="Phone Numbar" 
                                            name="phone" 
                                            onChange={handleChange}
                                            value={values.phone}
                                            error={Boolean(errors.phone && touched.phone)}
                                            errorMessage= {errors.phone}
                                            onBlur={handleBlur}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <InputBox 
                                            type="text" 
                                            className="email-bt" 
                                            placeholder="Email" 
                                            name="email" 
                                            onChange={handleChange}
                                            value={values.email}
                                            error={Boolean(errors.email && touched.email)}
                                            errorMessage= {errors.email}
                                            onBlur={handleBlur}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <InputBox
                                            type='textarea' 
                                            className="massage-bt" 
                                            placeholder="Massage" 
                                            rows={5} id="comment" 
                                            name="message" 
                                            onChange={handleChange}
                                            value={values.message}
                                            error={Boolean(errors.message && touched.message)}
                                            errorMessage= {errors.message}
                                            onBlur={handleBlur}
                                        />
                                    </div>
                                    <div className="send_btn">
                                        <Button type='submit'>Submit</Button>
                                    </div>
                                </form>
                            </Formik>
                        </div>
                        <div className="col-md-6">
                            <div className="map_main">
                                <div className="map-responsive">
                                    <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France" width={600} height={400} frameBorder={0} style={{ border: 0, width: '100%' }} allowFullScreen />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Contact;