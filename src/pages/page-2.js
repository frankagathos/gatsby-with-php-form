import React from "react"
import { Link } from "gatsby"
import Form from "../components/form-B"

import Layout from "../components/layout"
import SEO from "../components/seo"

const config = {
  title: 'Contact Form B',
  successMessage: 'Thank you for contacting me.',
  errorMessage: 'Sorry we have some problems.',
  fields:{
    firstName: '',
    lastName: '',
    email: '',
    msg: ''
  },
  fieldsConfig:  [
   { id: 1, label: 'First Name', fieldName: 'firstName', type: 'text',placeholder:'Your First Name', isRequired: true , className:'first-name-field'},
   { id: 2, label: 'Last Name', fieldName: 'lastName', type: 'text', placeholder: 'Your Last Name', isRequired: true , className:'last-name-field'},
   { id: 3, label: 'Email', fieldName: 'email', type: 'email', placeholder: ' Your Email', isRequired: true , className:'email-field'},
   { id: 4, label: 'Message', fieldName: 'msg', type: 'textarea',placeholder:'Write something.....', isRequired: true , className:'message-field'}
  ]
}

const SecondPage = () => (
  <Layout>
  <SEO title="Form-B page" />
  <Form config={config} />


  <Link to="/">Form-A</Link>
</Layout>
)

export default SecondPage
