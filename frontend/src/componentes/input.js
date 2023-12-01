import React from "react";
const inputAdicionar = ({type, placeholder}) => {
    return(
        <input
        className = "Input"
        type ={type}
        placeholder = {placeholder}
        />
    );
};

export default inputAdicionar