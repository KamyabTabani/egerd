import React from "react";
import "./button.scss"

interface IButton {
    type: "primary" | "secondary"
    children: React.ReactNode;
}

const Button = ({type,children}:IButton) => {
    return(
        <button data-varient={type} className="Button">{children}</button>
    );
}

export default Button