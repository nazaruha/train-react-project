import React, { useRef, useState } from 'react';
import { TextNode, Props } from './types'; // our interfaces 

/* 'React.FC' -> tells that variable 'TextField' is a React's Function Component. 
'FC' (Function Component).
<Props> -> means that our 'TextField' need to get text string as a parameter
<text: string>  -> is also acceptable. But interaces are better */
const TextField: React.FC<Props> = ({
    // here you can access your properties of 'Props' to declare initial value 
    // i = 100,
}) => {
    //hooks (declaring types for value)
        // const [count, setCount] = useState<number | null | undefined | string /* can be number or null or undefined or string type*/>(5); // single pipe '|' is a logical OR in TS. 
        // setCount(12)
        // setCount(null)
    //hooks (declaring object)
        // const [count, setCount] = useState<{text: string}>({text: 'hello'});
        // setCount({text: 'sdsd'})
    //hooks (declating interface)
        const [count, setCount] = useState<TextNode>({text: 'hello'});
        setCount({text: 'bye'});

    const inputRef = useRef<HTMLInputElement>(null);
    const divRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <div ref={divRef}>
                {/* in the ref object, if we hover it, we can see that we can pass in there string or function or refObject(useRef<HTMLInputElement>(null) object) */}
                <input 
                    ref={inputRef} /* 'ref' will be mad at us if we don't indicate the type of our useRef<...>  */
                /> 
                {/* <span>{i}</span> */}
            </div>
        </>
    );
};

export default TextField;