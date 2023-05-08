import classNames from 'classnames';
import { ChangeEvent, FC, InputHTMLAttributes } from 'react';

interface InputGroupProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
    type?: 'text' | 'email' | "password"
    id: string
    name: string
    ariaDesc: string
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
    errors?: string[]
}

const InputGroup: FC<InputGroupProps> = ({
    label,
    type = "text",
    id,
    name,
    ariaDesc,
    value,
    onInputChange,
    errors
}) => {
    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label">{label}</label>
            <input
                type={type}
                className={classNames(
                    "form-control",
                    { ["is-invalid"]: errors }
                )}
                id={id}
                name={name}
                aria-describedby={ariaDesc}
                value={value}
                onChange={onInputChange}
            />
            {errors && (

                <div className='invalid-feedback'>
                    {errors.map((item, index) => (
                        <span key={index}>{item}</span>
                    ))}
                </div>
            )}
        </div>
    )
}

export default InputGroup;