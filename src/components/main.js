import React from 'react';
import { Link } from 'gatsby';
import icon from '../assets/img/author/author-profile.jpg';

const main = () => {
	return (
		<section className="main-section container">
			<div className="columns" id="main-author-content">
				<div className="column">
					<div className="wrapper-heading-content">
						<h1>About Me</h1>
					</div>
				</div>

				<div className="column is-three-fifths section-main-contents">
					<p>
						<span className="icon-auhtor">
							<img alt="author_icon" src={icon} />
							<span className="author-name-tagline">
								Barbara Floyd
								<span className="author-fx" />
							</span>
						</span>
					</p>

					<p >
                    	I live with my husband in a little farming community near Phoenix, AZ.  I am a mother and grandmother who has read many stories to children over the years.
						<br /><br />
                    	I was born and raised in California, but have lived in many other states following my husband's working career with power plants.
						<br /><br />
                    	I am a retired secretary having worked in a variety of fields -- winery, cannery, General Mills, pre-school, church, lawyer, picture frame factory, newspaper, horse magazine, and power plants.
					</p>

					<button className="btn-main-customize">
						<Link to="/about-the-author#author"> Read More</Link>
					</button>
				</div>
			</div>
		</section>
	);
};

export default main;
