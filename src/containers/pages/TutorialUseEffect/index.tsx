import React, { FC, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const containerClass = "container-fluid mt-5 mb-3 d-flex justify-content-center flex-column";

const TutorialUseEffect: FC = () => {

    const [number, setNumber] = useState<number>(0);
    const buttonRef = useRef(0);
    const titleRef = useRef<HTMLSpanElement>(null);

    useEffect(() => { // useEffect renders at the end of all code. It renders when you render the page but after the main render (in the end)
        console.count("useEffect runs!");
        if (titleRef.current != undefined) {
            titleRef.current.innerHTML = `You clicked ${buttonRef.current} times using <span className="text-primary">useRef</span>`;
        }
    }, [buttonRef.current]) // inside square braces we input elements. And if all of them are changed -> then useEffect will work. If one of the didn't change it didn't work
    // [] - не очікує ніяких змін. Але якщо убрать її, то буде цикліруваться, якщо будем юзати там  useState

    console.count("component rendered!"); // the console.log but also output count of outputing of this text after :

    return (
        <>
            <h1 className="text-center"><u>useEffect</u> Tutorial</h1>

            <div className={containerClass} id="main-container">
                <span className="text-center">You clicked {number} times using <span className="text-danger">useState</span></span>
                <span className="text-center" ref={titleRef}>You clicked {buttonRef.current} times using <span className="text-primary">useRef</span></span>
                <div className="mt-3" id="button-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <button
                        className="btn btn-danger w-25 fs-5 mb-3"
                        onClick={() => setNumber((prev) => prev + 1)}
                    >
                        Increase 'useState'
                    </button>
                    <button
                        className="btn btn-primary w-25 fs-5 mb-3"
                        onClick={() => { buttonRef.current += 1 }}
                    >
                        Increase 'useRef'
                    </button>
                </div>
            </div>

            <li className="nav-link">
                <Link to="first-useEffect-mistake-DependencyMistake">Dependecy mistake</Link>
            </li>
            <li className="nav-link">
                <Link to="second-useEffect-mistake-IncorrectUpdateInUseEffect">UpdatingStateCorrectly</Link>
            </li>
            <li className="nav-link">
                <Link to="third-useEffect-mistake-ApiRequestsWithUseEffect">Best Ways to Make API Requests with useEffect</Link>
            </li>



        </>
    )
}

export default TutorialUseEffect;