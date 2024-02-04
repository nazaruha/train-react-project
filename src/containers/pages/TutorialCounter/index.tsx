import React, {useEffect, useState} from "react";

interface Props {
    children: (count: number, setCount: React.Dispatch<React.SetStateAction<number>>) => JSX.Element | null
}

const TutorialCounter: React.FC<Props> = ({ children }) => {
    const [count, setCount] = useState(0);

    // when count changes
    useEffect(() => {
        console.log(`Hello, count === ${count}`);
    }, [count]);

    // the first render
    useEffect(() => {
        console.log("Hhahaha")
    }, []);

    // all the time
    useEffect(() => {
        console.log('lalalla')
    })
    return (
        <div className="container m-t10">
            {children(count, setCount)}
        </div>
    );
};

export default TutorialCounter;
