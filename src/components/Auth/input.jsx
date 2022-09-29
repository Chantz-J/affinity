import React from "react";
import { AuthInput, AuthInputContainer, AuthLabel } from "./auth.css";
import { Container } from "../ui";

const Input = ({ label, handleChange, ...otherProps}) => {
    return (
        <Container className={AuthInputContainer}>
            {label && (
                <label className={AuthLabel}>
                    { label }
                </label>
            )}
            <input onChange={handleChange} {...otherProps} className={AuthInput}/>
        </Container>
    );
};

export default Input;