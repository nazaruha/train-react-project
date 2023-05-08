import { ChangeEvent, FC } from 'react';
import { useState } from 'react';
import InputGroup from '../../common/InputGroup';
import { ILoginErrors, ILoginPage, IUser } from './types';
import allin from '../../../http_common';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import setAuthToken from '../../helpers/setAuthToken';

const LoginPage: FC = () => {

    const init: ILoginPage = {
        email: "",
        password: ""
    }

    const [loginData, setLoginData] = useState<ILoginPage>(init);
    const [errors, setErrors] = useState<ILoginErrors>();
    const [user, setUser] = useState<IUser>();
    const navigate = useNavigate();

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value })
    }

    const onSubmitHandler = (e: any) => {
        e.preventDefault();
        allin.post("api/account/login", loginData)
            .then(resp => {
                const token = resp.data.token as string;
                setAuthToken(token);
                const tokenDecoded = jwtDecode(token) as IUser;
                setUser(tokenDecoded);
                navigate("/axios-train",);
            })
            .catch(err => {
                const errs = err.response.data.errors as ILoginErrors;
                console.log(errs);
                setErrors(errs);
            })
    }

    return (
        <>
            <div className='d-flex justify-content-center'>
                <div className='row'>
                    <div className='col-12'>
                        <h1 className='text-center'>Login Page</h1>
                    </div>
                    <div className='col'>
                        <div className={classNames(
                            { ['alert alert-danger']: errors?.invalid }
                        )}>
                            {errors?.invalid && (
                                errors.invalid.map((item, index) => (
                                    <span key={index}>{item}</span>
                                ))
                            )}
                        </div>
                        <form onSubmit={onSubmitHandler}>
                            <InputGroup
                                label='Email address'
                                type="email"
                                id='email'
                                name='email'
                                ariaDesc='email-helper'
                                value={loginData.email}
                                onInputChange={onInputChange}
                                errors={errors?.email}
                            />
                            <InputGroup
                                label="Password"
                                type="password"
                                id="password"
                                name='password'
                                ariaDesc='password-helper'
                                value={loginData.password}
                                onInputChange={onInputChange}
                                errors={errors?.password}
                            />
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage