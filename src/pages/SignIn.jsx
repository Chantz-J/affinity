import React, { useState, useEffect } from "react";
import FormWrapper from "../components/Auth/FormWrapper";
import Input from "../components/Auth/input";
import { Section, Text } from "../components/ui";
import { AuthButton } from "../components/Auth/auth.css";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { StrapiLoginUser } from "../redux/strapi/strapi-actions";
import auth from "../utils/auth";

const PAGE_STATE = {
    identifier: '',
    password: '',
}
  
const mapState = ({ strapi }) => ({
    loginSuccess: strapi.loginSuccess,
    loginError: strapi.loginError,
    loginSubmitting: strapi.loginSubmitting,
})

const SignIn = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [login, setLogin] = useState(PAGE_STATE)

    const { loginError, loginSubmitting, loginSuccess } = useSelector(mapState);

    useEffect(() => {
        if (auth.getToken()) {
          navigate('/dashboard');
        } else {
          return
        }
    },[navigate]);

    const handleChange = e => {
        const { name, value } = e.target
        setLogin({ ...login, [name]: value});
    };
    
    const handleRegistration = e => {
        e.preventDefault();
        dispatch(StrapiLoginUser(login));
        setLogin(PAGE_STATE);
        setTimeout(() => {
            navigate('/dashboard', { replace: true });
        }, 3000);
    };
    return (
        <Section>
            <FormWrapper onSubmit={handleRegistration}>
                <Text variant="heading">Sign In</Text>
                <Input 
                    placeholder={'Email'}
                    type='email'
                    value={login.identifier}
                    onInput={handleChange}
                    name='identifier'
                    required={true}
                />
                <Input 
                    placeholder={'Password'}
                    type='password'
                    value={login.password}
                    onInput={handleChange}
                    name='password'
                    required={true}
                />
                <button className={AuthButton}>Continue</button>
                {/* <Text variant="body">Already have an account? </Text> */}
            </FormWrapper>
        </Section>
    );
};

export default SignIn;