import * as React from 'react'
import { Link } from 'gatsby'
import { graphql } from "gatsby"


export default function Template({data}) {
  const post = data.markdownRemark

  return (
    <div>
      <Link to="/blog">
          Back to all posts
      </Link> 
      <h2>{post.frontmatter.title}</h2>
      <h4>Posted by {post.frontmatter.author} on {post.frontmatter.date} </h4>
      <div dangerouslySetInnerHTML={{__html:post.html}}></div>
    </ div>
  )
}

export const postQuery = graphql `
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }){
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`