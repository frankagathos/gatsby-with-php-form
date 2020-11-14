import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from '../components/form-A';


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Form />
    <Link to="/page-2/">Contact form B</Link>
  </Layout>
)

export default IndexPage
