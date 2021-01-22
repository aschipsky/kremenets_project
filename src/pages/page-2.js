import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

// // const ComponentName = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
  {
    allContentfulArticle {
      edges {
        node {
          title
          text {
            text
          }
          banner {
            file {
              url
            }
          }
          updatedAt
        }
      }
    }
  }
`

const SecondPage = ({ data }) => <Layout>
       {/* {JSON.stringify(data, null, 4)} */}
      {data.allContentfulArticle.edges.map(({node, index}) => (
         <>
          <h1>{node.title}</h1>
          <img src={node.banner.file.url}></img>
         </>
      ))}
        
         <p>Welcome to page 2</p>
         <Link to="/">Go back to the homepage</Link>\
      </Layout>

export default SecondPage