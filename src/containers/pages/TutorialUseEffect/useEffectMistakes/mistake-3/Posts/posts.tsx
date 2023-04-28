import axios from "axios";
import { useEffect, useState } from "react";

interface Data {
    userId?: number,
    id?: number,
    title?: string,
    body?: string,
}

const Posts = () => {
    const [posts, setPosts] = useState<Data[]>([]);

    useEffect(() => {
        // const controller = new AbortController(); // we need this shit if you changed our link during fetching the data
        // const signal = controller.signal;
        // fetch("https://jsonplaceholder.typicode.com/posts", { signal }) // if smth went wrong we won't get bugs on our site
        //     .then((res) => res.json())
        //     .then((data) => {
        //         setPosts(data);
        //     }).catch(err => {
        //         if (err.name === "AbortError") {
        //             console.log("cancelled")
        //         }
        //         else {
        //             //todo:handle error
        //         }
        //     })
        // return () => {
        //     controller.abort(); // makes abort (stop fetching site) when we changed link
        // };

        //USING AXIOS
        console.log("useEffect mounts");
        const cancelToken = axios.CancelToken.source();
        axios.get("https://jsonplaceholder.typicode.com/posts", { cancelToken: cancelToken.token }) // не регістро залежний. asynchronuous request
            .then((res) => {
                setPosts(res.data);
            }).catch(err => {
                if (axios.isCancel(err)) {
                    console.log("cancelled!");
                }
                else {
                    //todo:handle error
                }

            })

        return () => {
            console.log("useEffect unmounts");
            cancelToken.cancel();
        };
    }, []);

    const list = posts.map((item) => (
        <p key={item.id}>
            "useId": {item.userId},
            "id": {item.id},
            "title": {item.title},
            "body": {item.body}
        </p>
    ))

    return (
        <>
            {list}
        </>
    )
}

export default Posts;