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
import { getOrder } from '../../Redux/Action/order.action';

function OrderAdmin(props) {
    const dispatch = useDispatch();
    const Order = useSelector(state => state.Order)

    useEffect(() => {
        dispatch(getOrder())
    }, [])

    return (
        <div className="container">
            <div className='admin_cont'>
                <div className='add_category'>
                    <Button variant="contained">Order List</Button>
                </div>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Address</th>
                        <th scope="col" colSpan={4}>Order</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Order.order.map((c, i) => (

                            <tr>
                                <th scope="row">{i + 1}</th>
                                <td>{c.User.name}</td>
                                <td>{c.User.email}</td>
                                <td>{c.User.phone}</td>
                                <td>{c.User.address}</td>
                                <td>
                                    <thead>
                                        <tr>
                                            <th scope="col">Product Name</th>
                                            <th scope="col">Product Quantity</th>
                                            <th scope="col">Image</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            c.Order.map((d, i) => (
                                                <tr>
                                                    <td>{d.product_name}</td>
                                                    <td>{d.quantity}</td>
                                                    <td>
                                                        <div style={{ "width": "50px", "height": "50px", "borderRadius": "50%", "overflow": "hidden" }}>
                                                            <img src={d.url} width="100%" />
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </td>
                            </tr>

                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default OrderAdmin;