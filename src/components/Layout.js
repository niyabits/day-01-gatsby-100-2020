import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const Container = styled.div`
  font-family: sans-serif;
  max-width: 600px;
  margin: auto;
  margin-top: 36px;
`

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <Container>
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "black",
        }}
      >
        <h1 style={{ color: "hsl(200, 50%,40%)" }}>
          {data.site.siteMetadata.title}
        </h1>
      </Link>
      {children}
    </Container>
  )
}
