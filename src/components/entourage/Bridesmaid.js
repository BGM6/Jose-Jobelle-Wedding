import React from 'react';
import {Card, CardGroup} from 'react-bootstrap';

const Bridesmaid = () => {
	return (
		<div id="groomsmen-container">
			<div>
			</div>
			<p>{''}</p>
			<div>
				<CardGroup>
					<Card>
						<Card.Img variant="top"
											src="https://res.cloudinary.com/dncx7of7k/image/upload/v1636921771/JobelleJosePhotos/IMG_8446_i6leei.jpg"/>
						<Card.Body>
							<Card.Title>Joyceee AKA Trash Mom</Card.Title>
							<Card.Text>
								<h3>You're in love we get it!!! GAWD!!!!</h3>
							</Card.Text>
						</Card.Body>
					</Card>

					<Card>
						<Card.Img variant="top"
											src="https://images.unsplash.com/photo-1587228270774-db416ee48ea6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"/>
						<Card.Body>
							<Card.Title>Card title</Card.Title>
							<Card.Text>
								This card has supporting text below as a natural lead-in to additional
								content.{' '}
							</Card.Text>
						</Card.Body>
					</Card>
				</CardGroup>
			</div>

		</div>
	);
};

export default Bridesmaid;