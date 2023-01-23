// Import React
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from './layout'

// Define your component
const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle={"Welcome to my Gatsby site!"}>
        <p>I'm making this by following the Gatsby Tutorial.</p>
      </Layout>
    </main>
  )
}

export const Head = () => <title>Home Page</title>

// Export your component
export default IndexPage
