import '../components/css/style.css'
import {Card} from 'react-bootstrap';
import React from 'react';
const OurStory = () => {
	return (
		<div id="card-container">
			<Card style={{ width: '45rem' }}>
				<Card.Img
					variant="top"
					src="https://images.unsplash.com/photo-1505150099521-fde7970bcc3a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
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