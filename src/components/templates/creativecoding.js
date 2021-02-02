// SECTION TEMPLATE
// If you want to add more sections to your page, you can use this component as a template
import { useStaticQuery, graphql } from "gatsby"
import React, { useRef } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { motion } from "framer-motion"

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
    padding-top: 4rem;
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
    .text-content {
      width: 100%;
      max-width: 31.25rem;
      margin-bottom: 0rem;
    }
    .title {
      margin-top: 3.625rem;
      margin-bottom: 2rem;
      font-size: 1.375rem;
      line-height: 1.625rem;
      font-weight: 700;
    }
  }
`

// Add more styled components here

const CreativeCoding = () => {
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

  const bRef = useRef()
  const bOnScreen = useOnScreen(bRef)
  const bVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }
  // const sectionDetails = content[0].node

  return (
    <StyledSection id="ccoding">
      <StyledContentWrapper>
        <h3>Creative Coding</h3>
        <div className="text-content">
          Một số project nho nhỏ được tớ viết hoặc là thêm thắt, chỉnh sửa từ
          một số tác giả khác nhằm mục đích chính là phô diễn một kĩ thuật hoặc
          hiệu ứng nào đó, hay đơn giản là code cho vui để giết thời gian trong
          lúc rảnh rỗi thôi chứ không có gì đặc biệt hê hê.
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
        href="https://facebook.com"
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
