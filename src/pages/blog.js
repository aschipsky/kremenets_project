import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"

import Layout from "../components/layout"
import BannerBlog from "../components/bannerBlog"
// // const ComponentName = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>



const Blog = () =>  {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
          edges {
            node {
              title
              id
              slug
              publishedDate(formatString: "Do MMMM, YYYY")
              featuredImage {
                fluid(maxWidth: 750) {
                  ...GatsbyContentfulFluid
                }
              }
              excerpt {
                childMarkdownRemark {
                  excerpt(pruneLength: 150)
                }
              }
            }
          }
        }
      }
    `
  )
  return (
       <Layout>
       <BannerBlog/>
       <div  
        style={{
          margin: `0 auto`,
          maxWidth: 980,
          }}>
          {data.allContentfulBlogPost.edges
          .map(({node , index}) => (
            <>
            <div >
                <h2>{node.title}</h2>
                 <span>Публікація {node.publishedData}</span>
                 <Img
                  className="featured"
                  fluid={node.featuredImage.fluid}
                  alt={node.title}
                />
                <p className="excerpt">
                {node.excerpt.childMarkdownRemark.excerpt}
              </p>
              </div>
            </>
          ))}
          </div>
`      </Layout>
  )
}

     

export default Blog