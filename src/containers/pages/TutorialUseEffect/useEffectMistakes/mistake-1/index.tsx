import { FC, useState, useEffect, useMemo } from "react";
import classNames from 'classnames';

const FirstUseEffectMistake: FC = () => {
    const [name, setName] = useState("");
    const [state, setState] = useState({
        name: "",
        selected: false,
        age: 20,
        city: ""
    });

    const user = useMemo(() => ({ // memorise what you need in the state
        name: state.name,
        selected: state.selected,
    }),
        [state.name, state.selected] // this user will be changed if one of this props is changed. And it won't compiles if our value hasn't changed
    );

    //will work all the time
    // useEffect(() => {
    //     console.log("The state has changed, so useEffect runs! ")
    // }, [state]);

    //the same as useMemo but don't use it
    // useEffect(() => {
    //     console.log("The state has changed, so useEffect runs! ")
    // }, [state.name, state.selected]);

    // here we use useMemo. And our useEffect will render when our on of the values are really changed.
    useEffect(() => {
        console.log("The state has changed, so useEffect runs! ")
    }, [user])





    return (
        <>
            <h1 className="text-center">
                First <u>useEffect</u> <span className="text-danger">mistake</span>
            </h1>
            <h3 className="text-center">'Dependency mistake'</h3>
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
                <input className="mb-3" type="text" onChange={(e) => setName(e.target.value)} />
                <button
                    className="btn btn-primary mb-3"
                    onClick={() => setState((prev) => ({ ...prev, name }))}>
                    Add Name
                </button>
                <button
                    className={classNames([
                        'btn btn-primary',
                        {'btn-danger': state.selected}
                    ])}
                    onClick={() => setState((prev) => ({ ...prev, selected: !prev.selected }))}
                >
                    {state.selected ? 'Unselect' : 'Select'}
                </button>
                <span className="text-center mt-3">
                    {`
                { name:${user.name}, selected:${user.selected} }
                `}
                </span>

            </div>
        </>
    )
}

export default FirstUseEffectMistake;