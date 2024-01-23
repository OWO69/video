import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Clean Jolly Dolphin</title>
        <meta property="og:title" content="Clean Jolly Dolphin" />
      </Helmet>
      <video
        src="/m2-res_480p.mp4"
        poster="https://play.teleporthq.io/static/svg/videoposter.svg"
        controls="true"
        preload="none"
        className="home-video"
      ></video>
      <span className="home-text">Pandas Fight Club</span>
    </div>
  )
}

export default Home
