import '../components/css/style.css'
import {Card} from 'react-bootstrap';
import React from 'react';

const OurStory = () => {
	return (
		<div id="card-container">
			<Card style={{ width: '45rem', marginTop: '2rem' }}>
				<Card.Img
					variant="top"
					src="https://res.cloudinary.com/dncx7of7k/image/upload/v1636855053/JoseAndJobelleWedding/DSCF2601_miet3a.jpg"
				/>
				<Card.Body>
					<Card.Title>Our Story</Card.Title>
					<Card.Text>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
						molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
						numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
						optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
						obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
						nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
						tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
};

export default OurStory;