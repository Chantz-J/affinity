import gql from "graphql-tag";

const ARTICLES_QUERY = gql`
  query Articles {
    articles {
      data {
        attributes {
          slug
          title
          description
          createdAt
          updatedAt
          publishedAt
          category {
            data {
              attributes {
                slug
                name
              }
            }
          }
          
        }
      }
    }
  }
`;

export default ARTICLES_QUERY;