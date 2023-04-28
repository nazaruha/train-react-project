import React, { useRef, useState } from "react";

{/* useRef. Легко працювать з DOM(тіпа як document.getQuerySelector в js).  
            Можна змінювати за допомогою нього значення, але перерендерюватись(обновлятись типу чи шо) стора(компонент) не буде */ }

const TutorialUseRef: React.FC = () => {

    // work with main div

    const emailRef = useRef<HTMLInputElement>(null);

    const SubmitData = (e: any) => {
        e.preventDefault();
        console.log(emailRef.current?.value);
    }

    const EmailInputFocus = () => {
        console.log(emailRef.current?.focus())
        console.log(emailRef.current?.getBoundingClientRect())
    }

    // work with second div

    const [count, setCount] = useState(0);

    return (
        <>
            <h1 className="text-center"><u>useRef</u> Tutorial</h1>

            <div className="container-fluid mt-5 mb-3 d-flex justify-content-center" id="main-div">
                <form style={{ width: '50%' }} onSubmit={SubmitData}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input type="text" className="form-control" id="email" ref={emailRef} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button className='btn btn-warning ms-1' onClick={EmailInputFocus}>Focus</button>
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
        </>
    )
}

export default TutorialUseRef;