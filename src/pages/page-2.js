import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

// // const ComponentName = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
{
  allContentfulArticle {
  edges {
    node {
      id
      title
      text {
        text
      }
      banner {
        file {
          url
        }
        updatedAt
      }
      contentful_id
      publishedAt
    }
  }
}
}
`

const SecondPage = ({ data }) => 
       <Layout>
       {console.log(data)}
          {data.allContentfulArticle.edges
          .map(({node, index}) => (
            <>
            <div div key={node.id}>
                <h2>{node.title}</h2>
                 <span>{node.publishedAt}</span>
                <p>{node.text.text}</p>
                <img src={node.banner.file.url}></img>
              </div>
            </>
          ))}
`
         <p>Welcome to page 2</p>
      </Layout>

export default SecondPage