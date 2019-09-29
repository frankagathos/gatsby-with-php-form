import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


import Form from '../components/form';

/**
 * @config prepareing config prop.
 * api: url for the server endpoint
 * title: form title
 * successMessage: message will show in the UI when mail is successfully sent.
 * errorMessage: message will show in the UI when mail is not sent.
 * fields: this is the name of each field. This should be exact order of the fieldsConfig and fieldsConfig.fieldName should be  the same
 * fieldsConfig = settings for each input/textarea field
 */
const config = {
  title: 'Contact Form 1',
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
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
        <Form config={config}/>


        <Link to="/page-2/">Form 2</Link>
  </Layout>
)

export default IndexPage
