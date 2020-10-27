import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"
import Head from '../components/head'

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About"/>
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
    </Layout>
  
  )
}

export default AboutPage
