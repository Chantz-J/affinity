import gql from "graphql-tag";

const REGISTER_QUERY = gql`
    mutation
        register($email: String!, $username: String!, $password: String!) {
            register(input: { email: $email, username: $username, password: $password }) {
                jwt
                user {
                    id, 
                    username, 
                    email
                }
            }
        }
`;

export default REGISTER_QUERY;