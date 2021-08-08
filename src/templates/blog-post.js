import * as React from 'react'
import { graphql } from "gatsby"
import { IoIosTimer } from "react-icons/io";
import { ImSpoonKnife } from "react-icons/im";
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

  return (
    <Layout>
      <article>
        <h2>{post.frontmatter.title}</h2>
        <small> By {post.frontmatter.author} on {post.frontmatter.date} </small>
        <StaticImage 
        src="../images/honeycake.jpg"
        alt="cake with blueberries on top"
        className={recipeImage}
        />
        <div>
          <p>
            <IoIosTimer />
            Time: {post.frontmatter.time}</p>
          <p>
            <ImSpoonKnife />Serves: {post.frontmatter.serves}</p>
        </div>
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
        date
        author
        time
        serves
      }
    }
  }
`