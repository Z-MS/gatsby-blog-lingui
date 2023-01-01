import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { LocalizedLink as Link } from '@ericcote/gatsby-theme-i18n'
import { 
	container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle
} from './layout.module.css'
import { Trans } from '@lingui/macro'

const Layout = ({ pageTitle, children }) => {
	const data = useStaticQuery(graphql`
		query {
  		site {
  		  siteMetadata {
  		    title
  		  }
  		}
		}
	`)

	return (
		<div className={container}>
			<header className={siteTitle}>{data.site.siteMetadata.title}</header>
			<nav>
				<ul className={navLinks}>
					<li className={navLinkItem}><Link to="/" className={navLinkText}><Trans>Home</Trans></Link></li>
					<li className={navLinkItem}><Link to="/about" className={navLinkText}><Trans>About</Trans></Link></li>
					<li className={navLinkItem}><Link to="/blog" className={navLinkText}><Trans>Blog</Trans></Link></li>
				</ul>
			</nav>
			<main>
				<h1 className={heading}><Trans>{pageTitle}</Trans></h1>
				{children}
			</main>
		</div>
	)
}

export default Layout