import * as React from 'react'
import { graphql } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import {
  recipeImage,
  recipeDetails, 
  ingredients,
  method
} from './blog-post.module.css'


export default function Template({data}) {
  const post = data.markdownRemark
  console.log(post.frontmatter.image);

  return (
    <Layout>
      <article>
       <StaticImage 
        src="../images/honeycake.jpg"
        alt="cake with blueberries on top"
        className={recipeImage}
        />
        <h2>{post.frontmatter.title}</h2>
        <small>Posted by {post.frontmatter.author} on {post.frontmatter.date} </small>
        <div className={recipeDetails}>
          <div className={ingredients}></div>
            <ul>
              <li>
                <span>100g</span>
                flour
              </li>
              <li>
                <span>100g</span>
                flour
              </li>
              <li>
                <span>100g</span>
                flour
              </li>
              <li>
                <span>100g</span>
                flour
              </li>
            </ul>
        </div>
        <div className={method} dangerouslySetInnerHTML={{__html:post.html}}></div>
      </ article>
    </Layout>
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
        image
      }
    }
  }
`