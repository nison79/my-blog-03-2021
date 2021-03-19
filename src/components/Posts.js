import React from 'react'
import { Link , useStaticQuery,graphql } from 'gatsby'
import styled from 'styled-components'

const PageWrapper = styled.div`
    max-width:1020px;
`

const Posts = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx {
        edges {
          node {
            frontmatter {
              author
              date(formatString: "Do MMM YYYY")
              title
            }
            slug
            timeToRead
            rawBody
          }
        }
      }
    }
  
  `)

  return (
    <PageWrapper>
      {data.allMdx.edges.map(edge => (
        <div key = {edge.node.slug}>
          <div>
            <h2>{edge.node.frontmatter.title}</h2>
            <h4>{edge.node.frontmatter.author}</h4>
            <h5>{edge.node.frontmatter.date}</h5>
          </div>
          <p>{edge.node.frontmatter.body}</p>

        </div>
        
      ))}
      
    </PageWrapper>
  )
}

export default Posts
