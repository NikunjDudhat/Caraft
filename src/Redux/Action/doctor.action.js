import axios from 'axios'
import { addDoc, collection, getDocs, updateDoc, doc, deleteDoc  } from 'firebase/firestore'
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { deleteDoctorData, getDoctorData, postDoctorData, updateDoctorData } from '../../common/apis/doctor.api'
import storage, { db } from '../../Firebase'
import * as ActionTypes from '../ActionType'


export const getdoctor = () => async (dispatch) => {
    try {
        dispatch(loadingMedicines())

        const querySnapshot = await getDocs(collection(db, "Category"));
        let dataD = [];
        querySnapshot.forEach((doc) => {
            dataD.push({id: doc.id, ...doc.data()})
        });
        dispatch({type : ActionTypes.GET_DOCTOR, payload : dataD});


        // getDoctorData()
        // .then((data) => dispatch({type : ActionTypes.GET_DOCTOR, payload : data.data}))
        // setTimeout (
        //     function () {
        //         fetch(BASE_URL + 'doctor')
        //         .then(response => {
        //             if (response.ok) {
        //                 return response;
        //             } else {
        //                 var error = new Error('Error ' + response.status + ': ' + response.statusText);
        //                 error.response = response;
        //                 throw error;
        //             }
        //         },
        //         error => {
        //             var errmess = new Error(error.message);
        //             throw errmess;
        //         })
        //         .then(response => response.json())
        //         .then(doctors => dispatch({type : ActionTypes.GET_DOCTOR, payload : doctors}))
        //         .catch(error => dispatch(errorMedicines(error.message)))
        //     }
        // , 3000)

    } catch(error) {
        dispatch(errorMedicines(error.message))
    }
}

export const postdoctor = (data) => async (dispatch) => {
    try {
        dispatch(loadingMedicines())

        const randomName = Math.floor(Math.random() * 10000000000).toString();
        const storageRef = ref(storage, "Category/"+ randomName);

        uploadBytes(storageRef, data.url).then((snapshot) => {
            getDownloadURL(snapshot.ref)
                .then(async (url) => {
                    // const docRef = await addDoc(collection(db, "Category"), {
                    //     category_name: data.category_name,
                    //     category_price: data.category_price,
                    //     category_list: data.category_list,
                    //     url: url,
                    //     fileName: randomName,
                    // });

                    const docRef = await addDoc(collection(db, "Category"), {
                        category_name: data.category_name,
                        // category_price: data.category_price,
                        // category_list: data.category_list,
                        url: url,
                        fileName: randomName,
                    });


                    dispatch({type : ActionTypes.POST_DOCTOR, payload : {
                        id:docRef.id,
                        category_name: data.category_name,
                        // category_price: data.category_price,
                        // category_list: data.category_list,
                        url: url,
                        fileName: randomName,
                    }})
                })
        });

        // const docRef = await addDoc(collection(db, "Doctor"), data );

        // dispatch({type : ActionTypes.POST_DOCTOR, payload : {id:docRef.id, ...data}})

        // return postDoctorData(data)
        // .then((data) => dispatch({type : ActionTypes.POST_DOCTOR, payload : data.data}))

    } catch(error) {
        dispatch(errorMedicines(error.message))
    }
}

export const deleteDoctor = (data) => async (dispatch) => {
    try {
        dispatch(loadingMedicines())
        const desertRef = ref(storage, 'Category/'+ data.fileName);

        deleteObject(desertRef).then(async () => {
            await deleteDoc(doc(db, "Category", data.id));
            dispatch({type : ActionTypes.DELETE_DOCTOR, payload : data.id})
        }).catch((error) => {
            dispatch(errorMedicines(error.message))
        });


        
        // return deleteDoctorData(id)
        // .then((data) => dispatch({type : ActionTypes.DELETE_DOCTOR, payload : id}))

    } catch(error) {
        dispatch(errorMedicines(error.message))
    }
}

export const updataDoctor = (data) => async (dispatch) => {
    try {
        dispatch(loadingMedicines())
        const updataRef = doc(db, "Category", data.id);
        if(typeof data.url === "string") {
            await updateDoc(updataRef, {
                category_name: data.category_name,
                // category_price: data.category_price,
                // category_list: data.category_list,
                fileName: data.fileName,
                url: data.url,
            });
            dispatch({type : ActionTypes.UPDATE_DOCTOR, payload : data})
        } else {

            const newStorageRef = ref(storage, "Category/"+ data.fileName);
            deleteObject(newStorageRef).then(async () => {

                const randomName = Math.floor(Math.random() * 10000000000).toString();
                const ImgNewRef = ref(storage, "Category/"+ randomName);

                uploadBytes(ImgNewRef, data.url).then((snapshot) => {
                    getDownloadURL(snapshot.ref)
                        .then(async (url) => {
                            await updateDoc(updataRef, {
                                category_name: data.category_name,
                                // category_price: data.category_price,
                                // category_list: data.category_list,
                                url: url,
                                fileName: randomName,
                            });
                            dispatch({
                                type: ActionTypes.UPDATE_DOCTOR, payload:{...data, fileName: randomName, url: url}
                            })
                        })
                    }
                )
            })
        }

        // await updateDoc(updataRef, {
        //     email: data.email,
        //     name: data.name,
        //     post: data.post,
        //     salary: data.salary,
        // });
        // dispatch({type : ActionTypes.UPDATE_DOCTOR, payload : data})

        // return updateDoctorData(data)
        // .then((data) => dispatch({type : ActionTypes.UPDATE_DOCTOR, payload : data.data}))

    } catch(error) {
        dispatch(errorMedicines(error.message))
    }
}


export const loadingMedicines = () => (dispatch) => {
    dispatch({ type : ActionTypes.LOADING_MEDICINES })
}

export const errorMedicines = (error) => (dispatch) => {
    dispatch({ type : ActionTypes.ERROR_MEDICINES, payload : error })
}