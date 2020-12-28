import React from 'react'
import Layout from "../components/layout"
import Banner from "../components/banner"
import icon from '../assets/img/author/author-profile.jpg'
import { Helmet } from "react-helmet"


const abouttheauthor= (props) =>{


	const bannerText = (
		<>
			<span className="banr-tagline-fx">Barbara Floyd</span>
			<h1 className="banr-header-fx">
				About the
				<span className="banr-spn-highlight" id="span-non-front">
					Author
				</span>
			</h1>
		</>
	)

	return(
		<Layout>
			<Helmet title="About the Author | Barbara Floyd"/>
			<Banner bannerContext={bannerText} />

			<div className="container">
				<section className="body-author-contents columns">
					 	<div className="column">
					 		<div className="heading-quote">

					 			<div className="author-image-container">
					 				<img id="author" src={icon} alt="author" />
					 				<span className="author-name">
					 					<span className="author-span-ft">Author |  Writer </span>
					 					Barbara Floyd
					 				</span>
					 			</div>

					 			{/* <h4>
								 	To survive, they’ll need to traverse diffcult terrain, battle a grizzly bear, and get
									help from an unlikely friend – Snowbear.
					 			</h4> */}

					 			{/* <span className="ata-span-fx">author quote</span> */}
					 		</div>
					 	</div>

					 	 <div className="column">
					 	 	<article className="article-section">

					 	 		<p>
                                  	I live with my husband in a little farming community near Phoenix, AZ.  I am a mother and grandmother who has read many stories to children over the years.
									<br /><br />
									I was born and raised in California, but have lived in many other states following my husband's working career with power plants.
									<br /><br />
									I am a retired secretary having worked in a variety of fields -- winery, cannery, General Mills, pre-school, church, lawyer, picture frame factory, newspaper, horse magazine, and power plants.
									<br /><br />
									Since retirement, I enjoy crocheting, cross-stitching, and doing cross-word puzzles, as well as writing stories and poems.  I am also very active in my church and the VFW.
									<br /><br />
									I am not an avid sports fan.  But I do like baseball and NASCAR racing.
									<br /><br />
									I enjoy writing for children and try to have a moral to each story.  I feel it is important to put the right ideas into these little minds as they develop.  But to make learning fun.
								</p>
								
					 	 	</article>
					 	</div>
				</section>
			</div>
	  	</Layout>
	)
}

export default abouttheauthor