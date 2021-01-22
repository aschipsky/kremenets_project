import React from "react"
  import { StaticQuery, graphql } from "gatsby"

  // import Layout from "../components/layout"
  // import Article from "../components/article"

  const IndexPage = () => (
    // <Layout>
      <StaticQuery
        query={graphql`
        {
          allContentfulArticles {
            edges {
              ...ContentfulArticlesEdgeFragment
              node {
                article1
                
                data
                banner {
                  file {
                    url
                  }
                }
              }
            }
          }
        }
        
        fragment ContentfulArticlesEdgeFragment on ContentfulArticlesEdge {
          node {
            createdAt
          }
        }
        `}
        render={({
          allContentfulArticle: {
            edges
          }
        }) => (
          edges.map(({ node }) => (
            <p>{node}</p>
            // <Article key={node.id} content={node} />
          ))
        )}
      />
    // </Layout>
  )

  export default IndexPage