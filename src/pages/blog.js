import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from "gatsby"
import { Link } from 'gatsby'

const BlogPage = ({data}) => {
  return (
    <Layout>
      <p>We will see blog posts here</p>
      {data.allMarkdownRemark.edges.map(post => (
        <div key={post.node.id}>
          <h3>{post.node.frontmatter.title}</h3>
          <small>Author: {post.node.frontmatter.author} </small>
          <small>Date: {post.node.frontmatter.date} </small>
          <Link to={post.node.frontmatter.path}>
            Open blogpost
          </Link>
          <hr />
        </div>
      ))}
    </Layout>
  )
}

export const pageQuery = graphql `
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            author
            path
            title
            date
          }
        }
      }
    }
  }
`

export default BlogPage