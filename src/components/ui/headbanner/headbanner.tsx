import React from "react";
import "./headbanner.scss"

interface IHeadBanner {
    type: "rounded" | "common"
    children: React.ReactNode;
    className?: string
}

const HeadBanner = ({type, children, className}: IHeadBanner) => {
    return (
        <div data-varient={type} className={`Head-Banner ${className}`}>
            {children}
        </div>
    );
}

export default HeadBanner