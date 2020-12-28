import React from 'react'
import Layout from "../components/layout"
import Banner from "../components/banner"
import Toys from '../assets/img/books/toys-min.png'
import Fifi from '../assets/img/books/fifi-min.png'
import Bill from '../assets/img/books/bill-min.png'
import { DiscussionEmbed } from "disqus-react"
import { Helmet } from "react-helmet"


const abouttheauthor= (props) =>{

	const slug =(props.location.href);
	const disqusConfig = {
	  shortname: 'barbara-floyd',
	  config: { identifier:  12, slug}
	}
	
	const bannerText = (
		<>
			<span className="banr-tagline-fx">Barbara Floyd</span>
			<h1 className="banr-header-fx">
				<span className="banr-spn-highlight" id="span-non-front">Books</span>
			</h1>
		</>
	)

	return(
		<Layout>
			<Helmet title="Books | Barbara Floyd" />
			<Banner bannerContext={bannerText} />

			<main className="wrapperMain">
				<div className='container'>
						<div className="columns">
						
							<div className="column">
								<div className="bookImgContainer">
									<img id="toys" alt="main-book" src={Toys} />
								</div>
							</div>
							
							<div className="column">
								<section className="contentBook">

									<div className="title-wrapper">
										 <h1>Toys</h1>
									 	<p></p>
								    </div>

									<p>
                                    	This is a story about a little boy who didn't have any toys, but he was happy.
									</p>

								</section>

								<nav className="booklinkBlocks">
								    <span>Ebook :</span>
									<li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/Toys-Barbara-Floyd-ebook/dp/B08HSNN68D/ref=sr_1_1?dchild=1&keywords=9781648951770&qid=1609119308&s=digital-text&sr=1-1">Amazon</a></li>
									{/* <li><a rel="noopener noreferrer" target="_blank" href="https://www.stratton-press.com/books/you-can-too-how-an-aflac-rookie-built-the-business-in-a-year/">Stratton Press</a></li> */}
									<li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/toys-barbara-floyd/1137619718?ean=9781648951770">Barnes & Noble</a></li>
								</nav>

								<nav className="booklinkBlocks">
									<span>Paperback :</span>
									<li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/Toys-Barbara-Floyd/dp/1648951767/ref=sr_1_1?dchild=1&keywords=9781648951763&qid=1609119359&s=digital-text&sr=1-1">Amazon</a></li>
									<li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/toys-barbara-floyd/1137619718?ean=9781648951763">Barnes & Noble </a></li>
									<li><a rel="noopener noreferrer" target="_blank" href="https://www.booksamillion.com/p/Toys/Barbara-Floyd/9781648951763?id=8091184119054">Books A Million</a></li>
								</nav>
							</div>
						</div>



					<div className="columns">
						
						<div className="column">
							<div className="bookImgContainer">
								<img id="fifi" alt="main-book" src={Fifi} />
							</div>
						</div>
						
						<div className="column">
							<section className="contentBook">

								<div className="title-wrapper">
									 <h1>Fifi</h1>
									 <p></p>
								</div>

								<p>
									This is the story of a lost little black dog that was rescued by a little girl named Jessica and how she fit in with her new family.
								</p>

							</section>

							<nav className="booklinkBlocks">
								<span>Ebook :</span>
								<li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/Fifi-Barbara-Floyd-ebook/dp/B08Q6MCL7J/ref=sr_1_1?dchild=1&keywords=9781648952333&qid=1609119210&s=digital-text&sr=1-1">Amazon</a></li>
								{/* <li><a rel="noopener noreferrer" target="_blank" href="https://www.stratton-press.com/books/you-still-can-too-take-your-aflac-career-to-a-whole-new-level/">Stratton Press</a></li> */}
								<li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/fifi-barbara-floyd/1138327229?ean=9781648952333">Barnes & Noble</a></li>
							</nav>

							<nav className="booklinkBlocks">
								<span>Paperback :</span>
								<li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/Fifi-Barbara-Floyd/dp/1648952321/ref=sr_1_1?dchild=1&keywords=9781648952326&qid=1609119242&s=digital-text&sr=1-1">Amazon</a></li>
								<li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/fifi-barbara-floyd/1138327229?ean=9781648952326">Barnes & Noble </a></li>
								<li><a rel="noopener noreferrer" target="_blank" href="https://www.booksamillion.com/p/Fifi/Barbara-Floyd/9781648952326?id=8091184119054">Books A Million</a></li>
							</nav>
						</div>
					</div>


						<div className="columns">
						
							<div className="column">
								<div className="bookImgContainer">
									<img id="bill" alt="main-book" src={Bill} />
								</div>
							</div>
							
							<div className="column">
								<section className="contentBook">

									<div className="title-wrapper">
										 <h1>Bill the Spider</h1>
									 	 <p></p>
								    </div>

									<p>
									This is a story about a small spider and his best friend, Abigail.
									</p>

								</section>

								<nav className="booklinkBlocks">
								    <span>Ebook :</span>
									<li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/Bill-Spider-Barbara-Floyd-ebook/dp/B08HW1XFKQ/ref=sr_1_1?dchild=1&keywords=9781648951831&qid=1609119417&s=digital-text&sr=1-1">Amazon</a></li>
									{/* <li><a rel="noopener noreferrer" target="_blank" href="https://www.stratton-press.com/books/you-can-too-how-an-aflac-rookie-built-the-business-in-a-year/">Stratton Press</a></li> */}
									<li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/bill-the-spider-barbara-floyd/1137634674?ean=9781648951831">Barnes & Noble</a></li>
								</nav>

								<nav className="booklinkBlocks">
									<span>Paperback :</span>
									<li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/Bill-Spider-Barbara-Floyd/dp/1648951821/ref=sr_1_1?dchild=1&keywords=9781648951824&qid=1609119462&s=digital-text&sr=1-1">Amazon</a></li>
									<li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/bill-the-spider-barbara-floyd/1137634674?ean=9781648951824">Barnes & Noble </a></li>
									<li><a rel="noopener noreferrer" target="_blank" href="https://www.booksamillion.com/p/Bill-Spider/Barbara-Floyd/9781648951824?id=8091184119054">Books A Million</a></li>
								</nav>
							</div>
						</div>
		
						<div className="commentSection" >
						  <DiscussionEmbed {...disqusConfig} />
						</div>

				</div>	
			</main>


	  	</Layout>
	)
}

export default abouttheauthor