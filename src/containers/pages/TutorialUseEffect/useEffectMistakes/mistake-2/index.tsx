import classNames from 'classnames';
import { useEffect, useState } from 'react';


const SecondUseEffectMistake = () => {
    const [number, setNumber] = useState(0);

    // INFINITE LOOP. INCREASE NUMBER AGAIN AND AGAIN AND USEEFFECT WILL RENDER PAGE MANY TIMES
    // useEffect(() => {
    //     console.log("effect");
    //     setInterval(() => {
    //         setNumber(number + 1);
    //     }, 1000);
    // }, [number])


    // WILL BE GETTING SOME BUGS DURING RENDERING PAGE
    // useEffect(() => {
    //     console.log("effect");
    //     setInterval(() => {
    //         setNumber(prev => prev + 1); // this way to update the state is more better to avoid many bugs. But not every bug. if add
    //         // some text in our span it will be bugging again
    //     }, 1000);
    // }, [])

    // This work without any bugs
    useEffect(() => {
        console.log("effect");
        const interval = setInterval(() => {
            setNumber(prev => prev + 1); // this way to update the state is more better to avoid many bugs. But not every bug. if add
            // some text in our span it will be bugging again
        }, 1000);
        return () => { // this works firstly and then code inside useEffecet
            console.log("first it works");
            clearInterval(interval);
        }
    }, [])

    return (
        <>
            <h1 className="text-center">
                Second <u>useEffect</u> <span className="text-danger">mistake</span>
            </h1>
            <h3 className="text-center">'Incorrect update in useEffect'</h3>
            <div
                style={{
                    width: '50%'
                }}
                className={classNames(
                    { ["container"]: true },
                    { ["mt-5"]: true },
                    "d-flex",
                    { ["justify-content-center"]: true },
                    { ["flex-column"]: true }
                )}>
                <span className="text-center fs-5">{number}kj23dkfjsdskdksdjksdksdjksdj</span>
            </div>
        </>
    )
}

export default SecondUseEffectMistake;