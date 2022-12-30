import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { LocalizedLink as Link } from '@ericcote/gatsby-theme-i18n'

const BlogPage = ({ data }) => {
	return (
		<Layout pageTitle="Blog Posts">
			<ul>
				{
					data.allMdx.nodes.map(node => (
						<article key={node.id}>
							<h2>
								<Link to={`/blog/${node.frontmatter.slug}`}>
									{node.frontmatter.title}
								</Link>
							</h2>
							<p>{node.frontmatter.date}</p>
						</article>
					))
				}
			</ul>
		</Layout>
	)
}

export const query = graphql`
  query ($locale: String) {
    allMdx(sort: { frontmatter: { date: DESC }}
    filter: {fields: {locale: {eq: $locale}}}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
      }
    }
  }
`

export const Head = () => <Seo title="Blog Posts"/>

export default BlogPage