import React, { useEffect, useState } from "react";
import { GraphQLClient } from "graphql-request";
import { useNavigate } from "react-router";
import { Container } from "../ui";
import auth from "../../utils/auth";
import ARTICLES_QUERY from "../../queries/article/articles";
import Card from "../Card";

const AllArticles = () => {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        async function getAllArticles(){
            try {
                const endpoint =  'http://localhost:1337/graphql'
                const graphQLClient = new GraphQLClient(endpoint, {
                    headers: {
                        authorization: `Bearer ${JSON.parse(localStorage.getItem('jwtToken'))}`,
                    },
                })
    
                const data = await graphQLClient.request(ARTICLES_QUERY);
                // console.log(JSON.stringify(data, undefined, 2));
                setArticles(data)
                console.log(articles)
        
            } catch (error) {
                console.error(error.message)
                setError(error.message)
            }
        }
        getAllArticles();
    },[]);

    useEffect(() => {
        if (auth.getToken() == null) {
          navigate('/sign-in');
        } else {
          return
        }
    },[]);

    return (
        <Container>
            {
                error ? 'Something went wrong' :  articles.data && articles.data.map((article) => (
                    <Card
                        article={article} 
                        key={`article__${article.attributes.slug}`}
                    />
                    
                ))
            }
        </Container>
    );
};
            
export default AllArticles;