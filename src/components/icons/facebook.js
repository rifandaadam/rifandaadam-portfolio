import React from "react"
import PropTypes from "prop-types"

const Facebook = ({ color }) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      fill={color}
      x="0px"
      y="0px"
      width="430.117px"
      height="430.117px"
      viewBox="0 0 24 24"
    >
      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
    </svg>
  )
}

Facebook.propTypes = {
  color: PropTypes.string,
}

Facebook.defaultProps = {
  color: "#000000",
}

export default Facebook
