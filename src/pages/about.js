// Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

// Define your component
const AboutPage = () => {
  return (
    <main>
      <Layout pageTitle={"About Me"}>
        <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      </Layout>
    </main>
  )
}

/* 

  Gatsby lets you define a <title> and other document metadata with the Gatsby Head API. 
  You have to export a component called Head from your page template to apply the metadata. 
  Adding such metadata helps search engines like Google to better understand your site. 
  For this tutorial you’ll only be adding titles to pages but you can also later add other metadata.

*/
export const Head = () => <Seo title="About Me" />

// Export your component
export default AboutPage
