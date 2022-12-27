import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
	return (
		<main>
			<Layout pageTitle="About Me">
				<p>Hi there! I'm Zayyad, a software developer</p>
			</Layout>
		</main>
	);
};

export const Head = () => <Seo title="About Me"/>

export default AboutPage