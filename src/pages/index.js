import React from "react"
import {Link} from "gatsby"
import Layout from "../components/layout"
import Main from '../components/main'
import MainBottom  from '../components/main-bottom'
import Newsletter  from '../components/newsletter'
import Banner from "../components/banner"
import { Helmet } from "react-helmet"

const IndexPage = () => {
	

	const bannerText = (
		<>
			<span className="banr-tagline-fx">Barbara Floyd</span>
			<h1 className="banr-header-fx">
				<span className="banr-spn-highlight">Fifi</span>
				<span className="banr-spn-2">Story of a lost little black dog that was rescued by a little girl named Jessica</span> 
				<Link
					key=""
					className="btn-banner-intro" 
					to="/books#fifi">Read More
				</Link>
			</h1>
		</>
	)

	return (
	  	<Layout>
			  <Helmet title="Home | Barbara Floyd"/>
	  		 <Banner bannerContext={bannerText} />
			 <Main/>
			 <MainBottom />
			 <Newsletter />
	  	</Layout>
  	)

}

export default IndexPage
