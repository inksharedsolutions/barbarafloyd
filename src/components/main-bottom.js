import React, {useState, useEffect } from 'react'
import { Link } from 'gatsby';

/*Icons*/
import amazon from '../assets/img/icon-logo/amazon.png'
import barnes from '../assets/img/icon-logo/Barnes-and-noble-booksellers-logo.png'
import stratton from '../assets/img/icon-logo/stratton-logo.png'
import bam from '../assets/img/icon-logo/bam.png'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Toys from '../assets/img/books/toys-min.png'
import Bill from '../assets/img/books/bill-min.png'


const Mainbottom = () =>{
	    
    const [mobState, __functState] = useState(false);

	useEffect(() => {
        
        window.addEventListener("resize", ()=>{ 
            __functState(window.innerWidth <= 760);
        });

    }, [mobState]); 


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: (mobState) ? 1 : 2,
        slidesToScroll: 1,
     };



	return(
		<>
		<section className="main-bottom-section">
			 <div className="container">
			 	<div className="main-bottom-wrapper">
			 		<h1>Other Books</h1>

					<div className="book-container">
						<div className="book-wrapper-slider">
							<Link to="/books#toys"><img src={Toys} alt="toys"/></Link>
						</div>

						<div className="book-wrapper-slider">
						<Link to="/books#bill"><img src={Bill} alt="bill"/></Link>
						</div>
					</div>
					
			 	</div>
			</div>
		</section>

		<div className="feautured-links-logo">

			<p className="featured-param">	
				Barbara Floyd has been featured numerous times on...
			</p>
				
 			<ul>
 				<li><img alt="" src={amazon} /></li>
 				<li><img alt="" src={barnes} /></li>
 				<li><img alt="" src={stratton} /></li>
 				<li><img alt="" src={bam} /></li>
 			</ul>

 		</div>

 	</>
	)
}

export default Mainbottom