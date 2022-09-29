import React, { useState, useEffect  } from "react";
import { useNavigate } from 'react-router';
import { AuthButton } from "../components/Auth/auth.css";
import FormWrapper from "../components/Auth/FormWrapper";
import Input from "../components/Auth/input";
import { Section, Text } from "../components/ui";
import { useDispatch, useSelector } from 'react-redux';
import { StrapiCreateUser } from '../redux/strapi/strapi-actions';
import auth from "../utils/auth";

const PAGE_STATE = {
    username: '',
    email: '',
    password: '',
}

const mapState = ({ strapi }) => ({
    registrationSuccess: strapi.registrationSuccess,
    registrationError: strapi.registrationError,
    registrationSubmitting: strapi.registrationSubmitting,
})

const SignUp = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [registration, setRegistration] = useState(PAGE_STATE);
    const { registrationSubmitting, registrationSuccess } = useSelector(mapState);

    useEffect(() => {
        if (auth.getToken()) {
          navigate('/dashboard');
        } else {
          return
        }
    },[navigate]);

    const handleChange = e => {
        const { name, value } = e.target
        setRegistration({ ...registration, [name]: value});
    };

    const handleRegistration = e => {
        e.preventDefault();
        dispatch(StrapiCreateUser(registration));
        setRegistration(PAGE_STATE);
        setTimeout(() => {
            navigate('/dashboard', { replace: true });
        }, 3000);
    };

    return (
        <Section>
            <FormWrapper onSubmit={handleRegistration}>
                <Text variant="heading">Sign Up</Text>
                <Input 
                    type="text" 
                    placeholder={'Name'} 
                    value={registration.username} 
                    onInput={handleChange} 
                    name='username' 
                    required={true}
                />
                <Input 
                    type="email" 
                    placeholder={'Email'} 
                    value={registration.email} 
                    onInput={handleChange} 
                    name='email' 
                    required={true}
                />
                <Input 
                    type="password"
                    placeholder={'Password'} 
                    value={registration.password} 
                    onInput={handleChange} 
                    name='password'
                    required={true}
                />
                <button className={AuthButton}>Continue</button>
            </FormWrapper>
        </Section>
    );
};

export default SignUp;