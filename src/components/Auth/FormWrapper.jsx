import React from "react";
import { Container } from "../ui";
import Logo from "../../../svgs/Logo";
import { AuthBorder, AuthLogo, FormFlex } from "./auth.css";

const FormWrapper = ({ children, onSubmit }) => {
    return (
        <Container width="tight"className={AuthBorder} >
            <Container width="tight">
                <Container width="tight" className={AuthLogo}>
                    <Logo />
                </Container>
                <form className={FormFlex} onSubmit={onSubmit}>
                    { children }
                </form>
            </Container>
        </Container>
    );
};

export default FormWrapper;