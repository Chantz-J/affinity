import gql from "graphql-tag";

const LOGIN_QUERY = gql`
    mutation
        login($identifier: String!, $password: String!) {
            login(input: { identifier: $identifier, password: $password }) {
                jwt
                user {
                    id,
                    username,
                    email,
                    confirmed,
                    blocked,
                }
            }
        }
`;

export default LOGIN_QUERY;