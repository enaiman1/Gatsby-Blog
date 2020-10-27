import React from "react"
import { Link } from 'gatsby'
import Header from '../components/header'
import Footer from '../components/footer'

const AboutPage = () => {
  return (
    <div>
      <Header />
      <h1>About Me</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
        eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a
        bibendum metus. Donec scelerisque solli
      </p>
      <p>
        conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut
        vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar
        vitae dolor. Integer eu nibh at nisi ullamcorper sagittis id vel leo.
        Integer feugiat faucibus libero
      </p>
      <p>Need a developer? <Link to="/contact"> Contact me.</Link></p>
      <Footer />
    </div>
  )
}

export default AboutPage
