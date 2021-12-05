import '../components/css/style.css';
import {Card} from 'react-bootstrap';
import React from 'react';

const OurStory = () => {
	return (
		<div id="card-container">
			<Card style={{width: '45rem', marginTop: '2rem'}}>
				<Card.Img
					variant="top"
					src="https://res.cloudinary.com/dncx7of7k/image/upload/v1636919015/JobelleJosePhotos/DSCF2601_artboz.jpg"
				/>
				<Card.Body>
					<Card.Title className="text-center">Our Story</Card.Title>
					<Card.Text>
						<p className="our-story-text">
							WE MET ONLINE BY CHANCE! After some talking with the plan of a first date that got cancelled, a semi
							disastrous first date, some bribing of tacos and a trip to the zoo we finally took things a little more
							serious and now here we are almost six years later on the verge of marriage with many memories and many
							stories to tell about how we took a chance and about our many adventures together. </p>

						<div className="our-story-date text-center">
							First Date: <p>January 29, 2016</p>
							Officially a couple: <p>February 16, 2016</p>
							Proposal: <p>June 4, 2020</p>
							I do’s: <p>November 13, 2022</p>
						</div>
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
};

export default OurStory;