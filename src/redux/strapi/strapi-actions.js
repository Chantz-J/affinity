import auth from '../../utils/auth';
import axios from 'axios';
import { strapiTypes  } from './strapi-types';
import { print } from 'graphql';
import REGISTER_QUERY from '../../queries/auth/register';
import LOGIN_QUERY from '../../queries/auth/login';

// REGISTER
export const StrapiCreateUser = data => {
    return async (dispatch) => {
        dispatch({type: strapiTypes.START_ADD_NEW_USER});
        await axios
        .post('http://localhost:1337/graphql', { 
            query: print(REGISTER_QUERY),
            variables: {
                username: data.username,
                email: data.email,
                password: data.password,
            }
         })
        .then(res => {
            dispatch({
                type: strapiTypes.NEW_USER_ADDED_SUCCESS,
                payload: res.data.data.register.user
            })
            auth.setToken(res.data.data.register.jwt);
            auth.setUserInfo(res.data.data.register.user);
            console.log('Well done!');
            console.log('User profile', res.data.data.register.user);
            console.log('User token', res.data.data.register.jwt);
        })
        .catch(error => {
            dispatch({
                type: strapiTypes.ERROR_ADDING_USER,
                payload: error.response
            })
        });
    };
    
};




//LOGIN
export const StrapiLoginUser = data => {
    console.log(data) 
    return async (dispatch) => {
        dispatch({type: strapiTypes.LOGIN_USER_START});
        await axios
        .post('http://localhost:1337/graphql', { 
            query: print(LOGIN_QUERY),
            variables: {
                identifier: data.identifier,
                password: data.password,
            }
        })
        .then(res => {
            dispatch({
                type: strapiTypes.LOGIN_USER_SUCESS,
                payload: res.data.data.login.user
            })
            auth.setToken(res.data.data.login.jwt);
            auth.setUserInfo(res.data.data.login.user);
            console.log('Well done!');
            console.log('User profile', res.data.data.login.user);
            console.log('User token', res.data.data.login.jwt);
        })
        .catch(error => {
            dispatch({
                type: strapiTypes.LOGIN_USER_ERROR,
                payload: error.response
            })
            console.log(error.response)
        });
    };
};

