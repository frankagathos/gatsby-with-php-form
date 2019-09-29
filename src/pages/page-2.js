import React from "react"
import { Link } from "gatsby"
import Form from "../components/form-2"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
      <Form/>

      <Link to ="/">Return to main</Link>
  </Layout>
)

export default SecondPage
