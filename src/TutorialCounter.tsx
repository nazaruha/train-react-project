import React, { useState } from "react";

interface Props {
    children: (count: number, setCount: React.Dispatch<React.SetStateAction<number>>) => JSX.Element | null
}

const TutorialCounter: React.FC<Props> = ({ children }) => {
    const [count, setCount] = useState(0);
    return (
        <div className="container m-t10">
            {children(count, setCount)}
        </div>
    );
};

export default TutorialCounter;
