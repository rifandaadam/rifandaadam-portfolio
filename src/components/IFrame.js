import React, { useState } from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"

import { useInView } from "react-intersection-observer"

const IframeWrapper = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 0.7rem rgba(0, 0, 0, 0.32);
  margin-bottom: 40px;
  // max-width: 800px;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }

  .loader {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`

const LoaderWrapper = styled.div`
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10%;
  }

  .paths {
    > * {
      animation-name: pathAni;
      animation-duration: 1s;
      animation-iteration-count: infinite;
      animation-timing-function: ease-in-out;
      animation-fill-mode: alternate;
      transform-origin: 50% 50%;
      transform: scale(0.8);
    }
    path:nth-child(1) {
      animation-delay: 0.2s;
    }
    path:nth-child(2) {
      animation-delay: 0.3s;
    }
    path:nth-child(3) {
      animation-delay: 0.4s;
    }
  }

  @keyframes pathAni {
    0% {
      transform: scale(0.8);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.8);
    }
  }
`
// const Loader = () => {
//   let maskid = `mask-${Math.random()}`
//   let paintid = `paint-${Math.random()}`
//   return (
//     <LoaderWrapper>
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
//         <path
//           fill="#f9dd8f"
//           d="M58.233,19.275l-6.707-3.37l3.251-6.698c0.237-0.473,0.17-1.038-0.17-1.443 c-0.339-0.401-0.89-0.56-1.394-0.406l-7.654,2.219l-1.07-6.41c-0.041-0.36-0.226-0.683-0.514-0.904 c-0.288-0.216-0.653-0.303-1.008-0.247c-0.288,0.051-0.545,0.195-0.741,0.411l-5.555,5.547l-4.321-5.424 c-0.278-0.349-0.71-0.534-1.152-0.493c-0.417,0.051-0.782,0.293-0.988,0.657l-3.292,5.465l-8.106-4.643 c-0.442-0.267-0.998-0.247-1.425,0.041c-0.427,0.293-0.638,0.806-0.55,1.315l1.029,6.123l-7.407-1.068 c-0.499-0.072-0.998,0.154-1.281,0.575c-0.278,0.416-0.293,0.96-0.036,1.397l3.21,5.342L5.727,20.59 c-0.504,0.252-0.792,0.791-0.715,1.351c0.072,0.555,0.494,1.002,1.044,1.115l5.02,0.986l-2.057,5.137 c-0.226,0.524-0.087,1.135,0.345,1.51c0.432,0.375,1.06,0.431,1.548,0.134l0.658-0.37v3.287c0.005,0.082,0.021,0.164,0.041,0.247 c0.165,0.817,0.684,1.577,1.44,1.972L52.061,36c0.838-0.37,1.43-1.14,1.605-2.013c0.021-0.082,0.036-0.164,0.041-0.247v-2.712 c0.453,0.01,0.874-0.211,1.126-0.586c0.252-0.375,0.293-0.853,0.108-1.264l-2.14-5.342l5.349-2.137 c0.494-0.19,0.833-0.658,0.849-1.187C59.015,19.984,58.717,19.496,58.233,19.275z"
//         />
//         <path
//           fill="#faefde"
//           d="M52.637,37.686c-0.195-0.257-0.381-0.484-0.576-0.646L48,35H16l-2.948,2 c-0.221,0.172-0.478,0.394-0.7,0.686c-0.658,0.903-1.039,2.326-0.905,3.876c0.525,4.653,3.565,6.313,4.485,6.702 c0.396,2.195,1.44,4.794,3.415,7.509C21.323,58.746,30.54,63,32.515,63s11.192-4.385,13.168-7.227 c1.841-2.715,2.896-5.44,3.292-7.509c0.921-0.389,3.95-2.049,4.609-6.702C53.717,40.013,53.295,38.59,52.637,37.686z"
//         />
//         <polygon
//           fill="#85cbf8"
//           points="52,36 13,36 13,29.432 19,25 45,25 52,29.432"
//         />
//         <path
//           fill="#a0a4ac"
//           d="M40.817,36.079H24.183c-2.31,0-4.183-1.873-4.183-4.183v-3.663c0-2.31,1.873-4.183,4.183-4.183 h16.635c2.31,0,4.183,1.873,4.183,4.183v3.663C45,34.207,43.127,36.079,40.817,36.079z"
//         />
//         <path
//           fill="#8d6c9f"
//           d="M31.957,3.698h0.005H31.957 M43.715,3.768h0.005H43.715 M31.418,4.603l3.683,4.668 c0.355,0.45,0.885,0.726,1.457,0.758c0.038,0.002,0.076,0.003,0.113,0.003c0.532,0,1.043-0.212,1.42-0.592l4.634-4.672l0.861,5.208 c0.093,0.565,0.424,1.062,0.909,1.367c0.322,0.202,0.692,0.307,1.064,0.307c0.188,0,0.377-0.027,0.562-0.081l6.208-1.817 l-2.606,5.42c-0.471,0.981-0.072,2.158,0.898,2.65l5.432,2.755l-4,1.613c-1.02,0.411-1.517,1.57-1.111,2.592l1.877,4.73 c-0.187,0.092-0.359,0.214-0.511,0.362c-0.385,0.376-0.602,0.892-0.602,1.43v2.583c-0.001,0.005-0.002,0.01-0.003,0.014 c-0.053,0.265-0.227,0.493-0.457,0.595c-0.628,0.28-1.071,0.86-1.169,1.541c-0.098,0.681,0.158,1.361,0.683,1.806 c0.026,0.024,0.095,0.099,0.245,0.301c0.329,0.463,0.676,1.421,0.589,2.607c-0.55,3.844-2.94,5.064-3.415,5.27 c-0.61,0.265-1.049,0.815-1.17,1.469c-0.403,2.163-1.495,4.708-2.982,6.962c-1.525,2.255-9.746,6.371-11.513,6.545 c-1.841-0.165-9.978-4.178-11.486-6.51c-0.015-0.024-0.031-0.047-0.047-0.07c-2.05-2.896-2.805-5.354-3.078-6.906 c-0.116-0.662-0.557-1.222-1.174-1.489c-0.667-0.289-2.872-1.521-3.29-5.244c-0.098-1.237,0.231-2.19,0.525-2.606 c0.093-0.127,0.228-0.241,0.335-0.326c0.528-0.421,0.808-1.079,0.745-1.751c-0.063-0.672-0.461-1.267-1.057-1.582 c-0.194-0.102-0.36-0.349-0.413-0.614c-0.001-0.003-0.002-0.007-0.002-0.012v-3.164c0-0.712-0.378-1.37-0.993-1.728 c-0.311-0.181-0.659-0.272-1.007-0.272c-0.039,0-0.078,0.001-0.118,0.003l1.483-3.738c0.219-0.552,0.181-1.173-0.103-1.694 c-0.284-0.521-0.785-0.89-1.367-1.005L8.36,21.675l4.897-2.484c0.494-0.251,0.862-0.695,1.016-1.227 c0.154-0.532,0.081-1.104-0.202-1.58l-2.486-4.176l5.993,0.873c0.096,0.014,0.193,0.021,0.288,0.021c0.533,0,1.049-0.214,1.428-0.6 c0.447-0.456,0.649-1.098,0.544-1.728l-0.795-4.778l6.874,3.975c0.315,0.182,0.659,0.269,0.999,0.269 c0.682,0,1.345-0.349,1.719-0.976L31.418,4.603 M43.179,2c-0.071,0-0.141,0.006-0.212,0.017c-0.288,0.052-0.545,0.197-0.741,0.415 l-5.555,5.601l-4.321-5.476c-0.252-0.32-0.632-0.503-1.03-0.504c-0.04,0-0.081,0.002-0.122,0.006 c-0.417,0.052-0.782,0.296-0.988,0.664L26.919,8.24l-8.106-4.688c-0.209-0.127-0.443-0.19-0.677-0.19 c-0.261,0-0.523,0.078-0.748,0.231c-0.427,0.296-0.638,0.814-0.55,1.328l1.029,6.181l-7.407-1.079 c-0.062-0.009-0.123-0.013-0.184-0.013c-0.435,0-0.849,0.221-1.097,0.594c-0.278,0.42-0.293,0.97-0.036,1.411l3.21,5.393 l-6.625,3.36c-0.504,0.254-0.792,0.799-0.715,1.364c0.072,0.56,0.494,1.011,1.044,1.125l5.02,0.996l-2.057,5.186 c-0.226,0.529-0.087,1.146,0.345,1.525c0.246,0.216,0.556,0.327,0.868,0.327c0.235,0,0.47-0.063,0.68-0.192l0.658-0.373v3.319 c0.005,0.083,0.021,0.166,0.041,0.249c0.165,0.825,0.684,1.592,1.44,1.991c-0.221,0.176-0.478,0.404-0.7,0.705 c-0.658,0.928-1.039,2.391-0.905,3.983c0.525,4.781,3.565,6.487,4.485,6.887c0.396,2.256,1.44,4.926,3.415,7.716 C21.323,58.628,30.54,63,32.515,63s11.192-4.506,13.168-7.426c1.841-2.79,2.896-5.59,3.292-7.716 c0.921-0.399,3.95-2.105,4.609-6.887c0.134-1.592-0.288-3.054-0.946-3.983c-0.195-0.264-0.381-0.498-0.576-0.664 c0.838-0.373,1.43-1.151,1.605-2.033c0.021-0.083,0.036-0.166,0.041-0.249v-2.738c0.01,0,0.02,0,0.03,0 c0.441,0,0.85-0.221,1.096-0.592c0.252-0.379,0.293-0.861,0.108-1.276l-2.14-5.393l5.349-2.157 c0.494-0.192,0.833-0.664,0.849-1.198c0.015-0.534-0.283-1.027-0.766-1.25l-6.707-3.402l3.251-6.762 c0.237-0.477,0.17-1.047-0.17-1.457c-0.253-0.302-0.625-0.468-1.006-0.468c-0.129,0-0.26,0.019-0.388,0.059l-7.654,2.24 l-1.07-6.472c-0.041-0.363-0.226-0.69-0.514-0.913C43.744,2.091,43.464,2,43.179,2L43.179,2z"
//         />
//         <path
//           fill="#8d6c9f"
//           d="M40.822,26C42.023,26,43,26.977,43,28.178v3.644C43,33.023,42.023,34,40.822,34H24.178 C22.977,34,22,33.023,22,31.822v-3.644C22,26.977,22.977,26,24.178,26H40.822 M40.822,24H24.178C21.87,24,20,25.87,20,28.178v3.644 C20,34.13,21.87,36,24.178,36h16.644C43.13,36,45,34.13,45,31.822v-3.644C45,25.87,43.13,24,40.822,24L40.822,24z"
//         />
//         <path
//           fill="#8d6c9f"
//           d="M52,36H13c-0.553,0-1-0.447-1-1s0.447-1,1-1h39c0.553,0,1,0.447,1,1S52.553,36,52,36z"
//         />
//         <path
//           fill="#8d6c9f"
//           d="M18,50.109c-0.256,0-0.511-0.098-0.706-0.292c-0.392-0.391-0.392-1.023-0.002-1.414 c0.135-0.135,3.332-3.301,6.708-3.301c0.553,0,1,0.447,1,1s-0.447,1-1,1c-2.121,0-4.539,1.959-5.292,2.713 C18.513,50.012,18.256,50.109,18,50.109z"
//         />
//         <path
//           fill="#8d6c9f"
//           d="M19.999,55.12c-0.19,0-0.384-0.055-0.554-0.168c-0.459-0.307-0.583-0.926-0.278-1.385 c0.09-0.135,2.229-3.306,5.517-4.403c0.524-0.175,1.091,0.108,1.265,0.632c0.175,0.523-0.107,1.09-0.632,1.265 c-2.626,0.877-4.467,3.589-4.484,3.616C20.639,54.964,20.321,55.12,19.999,55.12z"
//         />
//         <path
//           fill="#8d6c9f"
//           d="M23.999,59.13c-0.15,0-0.303-0.033-0.446-0.105c-0.493-0.247-0.693-0.847-0.447-1.34 c0.043-0.088,1.096-2.174,3.187-4.27c0.391-0.393,1.023-0.391,1.414-0.002c0.392,0.39,0.392,1.023,0.002,1.414 c-1.85,1.854-2.805,3.732-2.813,3.751C24.719,58.928,24.365,59.13,23.999,59.13z"
//         />
//         <path
//           fill="#8d6c9f"
//           d="M47,50.108c-0.256,0-0.512-0.097-0.707-0.292c-0.027-0.027-2.751-2.714-5.293-2.714 c-0.553,0-1-0.447-1-1s0.447-1,1-1c3.376,0,6.573,3.166,6.708,3.301c0.39,0.391,0.389,1.022-0.001,1.413 C47.512,50.011,47.256,50.108,47,50.108z"
//         />
//         <path
//           fill="#8d6c9f"
//           d="M45.001,55.12c-0.323,0-0.64-0.155-0.833-0.443c-0.018-0.027-1.858-2.739-4.484-3.616 c-0.524-0.175-0.807-0.741-0.632-1.265s0.741-0.807,1.265-0.632c3.288,1.098,5.427,4.269,5.517,4.403 c0.305,0.459,0.181,1.078-0.278,1.385C45.385,55.065,45.191,55.12,45.001,55.12z"
//         />
//         <path
//           fill="#8d6c9f"
//           d="M41.001,59.13c-0.366,0-0.72-0.202-0.896-0.552c-0.009-0.019-0.964-1.896-2.813-3.751 c-0.39-0.391-0.39-1.024,0.002-1.414s1.024-0.39,1.414,0.002c2.091,2.096,3.144,4.182,3.187,4.27 c0.246,0.493,0.046,1.093-0.447,1.34C41.304,59.097,41.151,59.13,41.001,59.13z"
//         />
//         <ellipse cx="26" cy="40.089" fill="#8d6c9f" rx="2" ry="2.005" />
//         <ellipse cx="39" cy="40.089" fill="#8d6c9f" rx="2" ry="2.005" />
//         <path
//           fill="#efc88e"
//           d="M44.216,25.054H19.608c-0.888,0-1.608-0.72-1.608-1.608V23.44c0-1.877,1.521-3.398,3.398-3.398 h21.38c1.78,0,3.222,1.443,3.222,3.222v0.006C46,24.255,45.201,25.054,44.216,25.054z"
//         />
//         <path
//           fill="#8d6c9f"
//           d="M52.999,31.065c-0.182,0-0.365-0.049-0.53-0.152l-7.756-4.859H19.287l-7.756,4.859 c-0.469,0.293-1.085,0.151-1.379-0.316c-0.293-0.469-0.151-1.086,0.316-1.379l8-5.012c0.159-0.1,0.344-0.152,0.531-0.152h26 c0.188,0,0.372,0.053,0.531,0.152l8,5.012c0.468,0.293,0.609,0.91,0.316,1.379C53.657,30.899,53.332,31.065,52.999,31.065z"
//         />
//         <path
//           fill="#8d6c9f"
//           d="M27,22.047L27,22.047c-0.552,0-1-0.448-1-1v-2.009c0-0.552,0.448-1,1-1h0c0.552,0,1,0.448,1,1v2.009 C28,21.599,27.552,22.047,27,22.047z"
//         />
//         <path
//           fill="#8d6c9f"
//           d="M22,22.047L22,22.047c-0.552,0-1-0.448-1-1v-2.009c0-0.552,0.448-1,1-1h0c0.552,0,1,0.448,1,1v2.009 C23,21.599,22.552,22.047,22,22.047z"
//         />
//         <path
//           fill="#8d6c9f"
//           d="M32,22.047L32,22.047c-0.552,0-1-0.448-1-1v-2.009c0-0.552,0.448-1,1-1h0c0.552,0,1,0.448,1,1v2.009 C33,21.599,32.552,22.047,32,22.047z"
//         />
//         <path
//           fill="#8d6c9f"
//           d="M37,22.047L37,22.047c-0.552,0-1-0.448-1-1v-2.009c0-0.552,0.448-1,1-1l0,0c0.552,0,1,0.448,1,1 v2.009C38,21.599,37.552,22.047,37,22.047z"
//         />
//         <path
//           fill="#8d6c9f"
//           d="M42,22.047L42,22.047c-0.552,0-1-0.448-1-1v-2.009c0-0.552,0.448-1,1-1l0,0c0.552,0,1,0.448,1,1 v2.009C43,21.599,42.552,22.047,42,22.047z"
//         />
//       </svg>
//     </LoaderWrapper>
//   )
// }

const IFrame = ({ src, livedemo }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  })

  const handleLoaded = () => {
    setIsLoading(false)
  }

  return (
    <IframeWrapper livedemo={livedemo} className="iframe-wrapper" ref={ref}>
      <iframe
        title={src}
        style={{ opacity: isLoading ? "0" : "1" }}
        src={inView ? src : undefined}
        onLoad={handleLoaded}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope"
        allowFullScreen
      />
      {/* {isLoading && <Loader />} */}
    </IframeWrapper>
  )
}

IFrame.defaultProps = {
  livedemo: false,
}
IFrame.propTypes = {
  src: PropTypes.string.isRequired,
  livedemo: PropTypes.bool,
}

export default IFrame
