// Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

// Define your component
const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle={"Welcome to my Gatsby site!"}>
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <StaticImage
          alt="Yoda, a member of the jedi council, looking stoically at the camera"
          src="https://lumiere-a.akamaihd.net/v1/images/6272b15b9b371100010cda0a-image_53669b75.jpeg?region=0,0,1536,864&width=768"
        />
        <StaticImage
          alt="Jabba the Hutt"
          src="../images/Jabba-the-Hutt.png"
        />
      </Layout>
    </main>
  )
}

export const Head = () => <Seo title="Home Page" />

// Export your component
export default IndexPage
