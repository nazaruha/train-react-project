import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ThirdUseEffectMistake = () => {
    return (
        <>
            <h1 className="text-center">
                Second <u>useEffect</u> <span className="text-danger">mistake</span>
            </h1>
            <h3 className="text-center">'Best Ways to Make API Requests with useEffect'</h3>
            <h4 className="text-center">Make Low3G in the Network</h4>
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
                <Link to=":posts">Got to posts</Link>
            </div>
        </>
    )
}

export default ThirdUseEffectMistake;