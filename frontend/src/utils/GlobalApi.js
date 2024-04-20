import request, { gql } from "graphql-request";

const HYGRAPH_URL = `https://api-us-east-1-shared-usea1-02.hygraph.com/v2/${
  import.meta.env.VITE_PUBLIC_HYGRAPH_API_KEY
}/master`;

const getAllProjectList = async () => {
  const query = gql`
    query ProjectLists {
      projectLists {
        date
        demoUrl
        gitUrl
        id
        info
        title
        tool {
          ... on Tool {
            id
            name
            icon
          }
        }
        image {
          url
        }
      }
    }
  `;

  return await request(HYGRAPH_URL, query);
};

export default getAllProjectList;
