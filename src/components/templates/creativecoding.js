// SECTION TEMPLATE
// If you want to add more sections to your page, you can use this component as a template
import { useStaticQuery, graphql } from "gatsby"
import React, { useRef, useEffect } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Img from "gatsby-image"
import { motion, useAnimation } from "framer-motion"
import { MDXRenderer } from "gatsby-plugin-mdx"

import ContentWrapper from "../../styles/contentWrapper"
import { useOnScreen } from "../../hooks"
import Button from "../../styles/button"
import IFrame from "../IFrame"

// Full Width Section
const StyledSection = styled.section`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.background};
  margin-top: 6rem;
  .cta-btn {
    display: block;
    text-align: center;
    margin: 2rem auto;
    padding-top: 6rem;
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      margin: 0 auto;
    }
  }
`

// Fixed width container for content stuff
const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .descrip {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        flex-direction: row;
        justify-content: space-between;
      }
      .inner-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    }
    .text-content {
      width: 100%;
      max-width: 31.25rem;
      margin-bottom: 0rem;
    }
    .fixspace {
      margin-bottom: 0rem;
      font-size: 2rem;
    }
    .title {
      margin-top: 3.625rem;
      margin-bottom: 2rem;
      font-size: 1.375rem;
      line-height: 1.625rem;
      font-weight: 700;
    }
    .image-content {
      width: 100%;
      max-width: 18rem;
      margin-top: 2rem;
      margin-left: 0;
      @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        margin-left: 2rem;
      }
    }
    // .about-author {
    //   border-radius: ${({ theme }) => theme.borderRadius};
    //   box-shadow: 0 0 2.5rem rgba(0, 0, 0, 0.16);
    //   filter: grayscale(20%) contrast(1) brightness(90%);
    //   transition: all 0.3s ease-out;
    //   &:hover {
    //     filter: grayscale(50%) contrast(1) brightness(90%);
    //     transform: translate3d(0px, -0.125rem, 0px);
    //     box-shadow: 0 0 2.5rem rgba(0, 0, 0, 0.32);
    //   }
    // }
  }
`

// Add more styled components here

const CreativeCoding = ({ content }) => {
  const { frontmatter, body } = content[0].node
  const tControls = useAnimation()
  const iControls = useAnimation()

  const creativecoding = useStaticQuery(
    graphql`
      query {
        allCreativecodingJson {
          edges {
            node {
              description
              title
              id
              links {
                github
                codepen
              }
            }
          }
        }
      }
    `
  )

  // Required for animating the text content
  const tRef = useRef()
  const tOnScreen = useOnScreen(tRef)

  // Required for animating the image
  const iRef = useRef()
  const iOnScreen = useOnScreen(iRef)

  // Required for animating the button
  const bRef = useRef()
  const bOnScreen = useOnScreen(bRef)
  const bVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  useEffect(() => {
    if (1) {
      if (tOnScreen) tControls.start({ opacity: 1, y: 0 })
      if (iOnScreen) iControls.start({ opacity: 1, x: 0 })
    }
  }, [tControls, iControls, tOnScreen, iOnScreen])

  return (
    <StyledSection id="ccoding">
      <StyledContentWrapper>
        <h3 className="fixspace">Creative Coding</h3>
        <div className="descrip">
          <motion.div
            className="inner-wrapper"
            ref={tRef}
            initial={{ opacity: 0, y: 40 }}
            animate={tControls}
            transition={{ duration: 0.8 }}
          >
            {/* <h3 className="section-title">{frontmatter.title}</h3> */}
            <div className="text-content">
              <MDXRenderer>{body}</MDXRenderer>
            </div>
          </motion.div>
          <motion.div
            className="image-content"
            ref={iRef}
            initial={{ opacity: 0, x: 40 }}
            animate={iControls}
            transition={{ duration: 0.5 }}
          >
            <Img
              className="about-author"
              fluid={frontmatter.image.childImageSharp.fluid}
            />
          </motion.div>
        </div>
        {creativecoding.allCreativecodingJson.edges.map(({ node }) => (
          <div key={node.id}>
            <div className="title">{node.title}</div>
            <IFrame livedemo src={node.links.codepen} />
          </div>
        ))}
      </StyledContentWrapper>
      <motion.a
        ref={bRef}
        variants={bVariants}
        animate={bOnScreen ? "visible" : "hidden"}
        className="cta-btn"
        href="https://codepen.io/meokisama"
        target="_blank"
        rel="nofollow noopener noreferrer"
        aria-label="External Link"
      >
        <Button type="button" textAlign="center" center>
          See more on Codepen
        </Button>
      </motion.a>
    </StyledSection>
  )
}

CreativeCoding.propTypes = {
  content: PropTypes.any.isRequired,
}

export default CreativeCoding
