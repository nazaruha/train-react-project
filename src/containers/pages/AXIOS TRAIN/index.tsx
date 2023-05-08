import { FC, useEffect, useState } from 'react'
import axios from 'axios'; // to get data from URLs
import { APP_ENV } from '../../../env'; // contain object with urls (.env file in the root)
import allin from '../../../http_common'; // there we have our own axioses with specific settings with basedUrls etc.
import { ICategoryItem } from './types'; // interface for our data
import DefaultModal from '../../default/defaultModal';
import { Button, Modal } from 'react-bootstrap';
import jwtDecode from 'jwt-decode';
import { IUser } from '../../auth/login/types';

const AxiosTrain: FC = () => {

    let userData: IUser = {
        name: "",
        image: "",
        roles: ""
    };
    const [categories, setCategories] = useState<ICategoryItem[]>();
    const [refresh, setRefresh] = useState<number>(0);
    const [deleteId, setDeleteId] = useState<number>(-1);
    const [show, setShow] = useState<boolean>(false);

    // const onDeleteClick = (e: any) => {
    //     e.preventDefault();
    //     const id = e.target.value as number;
    //     console.log(id);

    //     setShow(true);
    //     // allin.delete(`api/categories/delete/${id}`)
    //     //     .then(resp => {
    //     //         console.log(resp);
    //     //         setRefresh(refresh + 1)
    //     //     })
    //     //     .catch(err => {
    //     //         console.log("ERROR =>", err);
    //     //     })
    // }

    // const onModalDelete = (e: any) => {
    //     e.preventDefault();
    //     setShow(true);
    // }

    const handleCloseModal = () => {
        setShow(false);
        console.log("Close modal")
    }

    const handleClickDelete = (id: number) => {
        setDeleteId(id);
        setShow(true);
        console.log("Retreive id", id);
    }

    const handleDeleteCategory = (e: any) => {
        e.preventDefault();
        allin.delete(`api/categories/delete/${deleteId}`)
            .then(resp => {
                console.log("Category is deleted!", resp)
                setShow(false);
                // window.location.reload(); // refresh window
                setRefresh(refresh + 1); // refresh state only and useEffect
            })
            .catch(err => {
                console.log("ERR delete category =>", err)
            })
    }

    const viewCategoryList = categories?.map((item) => (
        <div className="card m-3" key={item.id} style={{ width: '18rem' }}>
            <img src={`${APP_ENV.ALLIN_URL}images/150_${item.image}`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">id: {item.id}</li>
                <li className="list-group-item">urlSlug: {item.urlSlug}</li>
                <li className="list-group-item">priority: {item.priority}</li>
            </ul>
            <div className="card-body">
                <div className='d-flex justify-content-center'>
                    <a href={`${APP_ENV.ALLIN_URL}api/Categories/get/${item.id}`} target="_blank" className="card-link">Item link</a>
                    <a href={`${APP_ENV.ALLIN_URL}images/150_${item.image}`} target="_blank" className="card-link">Image link</a>
                </div>
                <div className="d-flex justify-content-center mt-3">
                    <a href="#" className="btn btn-primary w-50">Edit</a>
                    <a href="#" className="btn btn-warning w-50 ms-1">Update</a>
                    <button className="btn btn-danger w-50 ms-1" onClick={() => handleClickDelete(item.id)}>Delete</button>
                </div>
            </div>
        </div>
    ))

    useEffect(() => {
        // axios.get("https://f21.allin.ml/api/Categories/list")
        // axios.get(`${APP_ENV.ALLIN_URL}api/Categories/list`)
        allin.get<ICategoryItem[]>(`api/Categories/list`) // use ours made-up axios object with basedUrl and header settings
            .then(resp => {
                console.log(resp);
                const { data } = resp; // easy way to get parameter from object. Just text name of prop into square bracers - 
                //{[prop_name]}
                console.log(data)
                setCategories(data); // initalize our data
            })
            .catch(err => {
                console.log(err);
                // console.log(err.response.statusText);
            })
            .finally(() => {
                console.log("this part will compile every time in the end of useEffect");
            })

        //retries token data
        if (localStorage.token) {
            userData = jwtDecode(localStorage.token) as IUser;
        }
    }, [refresh]) // use this square bracers to avoid useState's cycling in the useEffect

    return (
        <>
            <DefaultModal
                show={show}
                title='Delete Category'
                body='Are you sure you want to delete this Category?'
                closeButtonText='Close'
                closeButtonColor='secondary'
                applyButtonText='Delete'
                applyButtonColor='danger'
                handleClose={handleCloseModal}
                handleApplyEvent={handleDeleteCategory}
            />
            <h1 className="text-center">Axios Train</h1>
            <div className='row'>
                {userData.roles === 'admin' && (
                    <div className='col-12'>
                        <button className='btn btn-success w-15'>Create Category</button>
                    </div>
                )}
                {viewCategoryList}
            </div>
        </>
    )
}

export default AxiosTrain;