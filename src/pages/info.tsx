
import { graphql, Link } from "gatsby"
import React, { FunctionComponent } from "react"

interface InfoPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: string
      }
    }
  }
}

const InfoPage: FunctionComponent<InfoPageProps> = function ({
  data: {
    site: {
      siteMetadata: { title, description, author }
    }
  }
}) {
  return (
    <>
      {title} {description} {author}
      <Link to="/">Home</Link>
    </>
  )
}

export default InfoPage

export const metaQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
		    author
      }
    }
  }
`