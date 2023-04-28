import { FC, useEffect, useState } from 'react'
import axios from 'axios'; // to get data from URLs
import { APP_ENV } from '../../../env'; // contain object with urls (.env file in the root)
import allin from '../../../http_common'; // there we have our own axioses with specific settings with basedUrls etc.
import { ICategoryItem } from './types'; // interface for our data

const AxiosTrain: FC = () => {

    const [categories, setCategories] = useState<ICategoryItem[]>();

    const viewCategoryList = categories?.map((item) => (
        <div className="card" key={item.id} style={{ width: '18rem' }}>
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
                <a href={`${APP_ENV.ALLIN_URL}api/Categories/get/${item.id}`} target="_blank" className="card-link">Item link</a>
                <a href={`${APP_ENV.ALLIN_URL}images/150_${item.image}`} target="_blank" className="card-link">Image link</a>
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
    }, []) // use this square bracers to avoid useState's cycling in the useEffect

    return (
        <>
            <h1 className="text-center">Axios Train</h1>
            <div className='row' style={{ gap: 20 }}>
                {viewCategoryList}
            </div>
        </>
    )
}

export default AxiosTrain;