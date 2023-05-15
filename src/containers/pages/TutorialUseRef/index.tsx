import React, { useRef, useState } from "react";

{/* useRef. Легко працювать з DOM(тіпа як document.getQuerySelector в js).  
            Можна змінювати за допомогою нього значення, але перерендерюватись(обновлятись типу чи шо) стора(компонент) не буде */ }

const TutorialUseRef: React.FC = () => {

    // work with main div

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const submitButtonRef = useRef<HTMLButtonElement>(null);

    const checkBoxRef = useRef<HTMLInputElement>(null);
    const agreeButtonRef = useRef<HTMLButtonElement>(null);
    const disagreeButtonRef = useRef<HTMLButtonElement>(null);

    const SubmitData = (e: any) => {
        e.preventDefault();
        alert(`Data: ${emailRef.current?.value}`);
        console.log(emailRef.current?.value + ' ' + passwordRef.current?.value);
    }

    const EmailInputFocus = () => {
        console.log(emailRef.current?.focus())
        console.log(emailRef.current?.getBoundingClientRect())
    }

    const EmailChangeFon = () => {
        if (emailRef.current) {
            if (emailRef.current.style.background === "red") {
                emailRef.current.style.background = "none"
                return;
            }
            emailRef.current.style.background = "red";
        }
    }

    const EmailKeyUpHandler = (e: any) => {
        if (e.key === "Enter") {
            passwordRef.current ? passwordRef.current.focus() : console.log("input is null");
        }
    }

    const PasswordKeyUpHandler = (e: any) => {
        if (e.key === "Enter") {
            submitButtonRef.current ? submitButtonRef.current.click() : console.log("button is null");
        }
    }

    const onCheckBoxClick = (e: any) => {
        // e.preventDefault();
        if (checkBoxRef.current) {
            const isChecked: boolean = checkBoxRef.current.checked;
            switch (isChecked) {
                case true: {
                    agreeButtonRef.current ? agreeButtonRef.current.disabled = true : console.log("button is null");
                    disagreeButtonRef.current ? disagreeButtonRef.current.disabled = false : console.log("button is null");
                    return;
                }
                case false: {
                    disagreeButtonRef.current ? disagreeButtonRef.current.disabled = true : console.log("button is null");
                    agreeButtonRef.current ? agreeButtonRef.current.disabled = false : console.log("button is null");
                    return;
                }
            }
        }
    }

    // work with second div

    const [count, setCount] = useState(0);

    return (
        <>
            <h1 className="text-center"><u>useRef</u> Tutorial</h1>

            <div className="container-fluid mt-5 mb-3 d-flex justify-content-center" id="main-div">
                <form style={{ width: '50%' }} onSubmit={SubmitData}>
                    <div className="mb-1">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input type="text" className="form-control" id="email" ref={emailRef} onKeyUp={EmailKeyUpHandler} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" ref={passwordRef} onKeyUp={PasswordKeyUpHandler} />
                    </div>
                    <button type="submit" className="btn btn-primary" ref={submitButtonRef}>Submit</button>
                    <button className='btn btn-warning ms-1' onClick={EmailInputFocus}>Focus</button>
                    <button className='btn btn-secondary ms-1' onClick={EmailChangeFon}>Change Fon</button>
                </form>
            </div>

            <h1 className="text-center mt-5"><u>useRef</u> Button Counter</h1>

            <div className="container-fluid mt-5 d-flex justify-content-center" id="second-div">
                <button
                    className="btn btn-primary"
                    onClick={() => { setCount(count + 1) }}
                >
                    I was clicked on {count} times
                </button>
                <button
                    className="btn btn-warning ms-3"
                    onClick={() => { setCount(0) }}
                >
                    Reset counter
                </button>
            </div>

            <h1 className='text-center mt-5'><u>useRef</u> Check Box</h1>

            <div className="container-fluid mt-5 d-flex justify-content-center" id='third-div'>
                <div className="row">
                    <div className="col-12">
                        <input ref={checkBoxRef} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={onCheckBoxClick} />
                        <label className="form-check-label" htmlFor="flexCheckDefault" onClick={onCheckBoxClick}>
                            Default checkbox
                        </label>
                    </div>
                    <div className="col-6">
                        <button className="btn btn-success w-75" ref={agreeButtonRef} onClick={(e) => {
                            if (checkBoxRef.current) {
                                checkBoxRef.current.checked = true;
                                e.currentTarget.disabled = true;
                                disagreeButtonRef.current ? disagreeButtonRef.current.disabled = false : console.log("button is null");
                            }
                        }}>AgreeRef</button>
                    </div>
                    <div className="col-6">
                        <button className="btn btn-danger w-75" ref={disagreeButtonRef} onClick={(e) => {
                            if (checkBoxRef.current) {
                                checkBoxRef.current.checked = false;
                                e.currentTarget.disabled = false;
                                agreeButtonRef.current ? agreeButtonRef.current.disabled = false : console.log("button is null");
                            }
                        }}>DisagreeRef</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default TutorialUseRef;