import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
// import styled from "styled-components"

const Index = ({ data }) => {
  return (
    <Layout>
      <p style={{ position: "relative", top: -9 }}>
        A Gatsby Blog made from scratch for 100 Days of Gatsby
      </p>
      <br />
      <div className="blog">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <article key={node.id}>
            <Link to={node.fields.slug}>
              <h3 style={{ color: "black" }}>{node.frontmatter.title}</h3>
            </Link>
            <small style={{ position: "relative", top: -12 }}>
              {node.frontmatter.date}
            </small>
            <p style={{ position: "relative", top: -9 }}>{node.excerpt}</p>
            <br />
          </article>
        ))}
      </div>
    </Layout>
  )
}

export default Index

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
