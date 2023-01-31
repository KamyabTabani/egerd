import "./input.scss"
import React from "react";

interface IInput {
    type: string
    placeholder: string
    value: string
    setValue: React.Dispatch<React.SetStateAction<string>>
}

const Input = ({type, value, setValue, placeholder}: IInput) => {
    return (
        <input min={0} type={type} value={value} onChange={e => setValue(e.target.value)} placeholder={placeholder}
               className="Input"/>
    )
}

export default Input