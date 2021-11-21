import React from 'react';
import {CardGroup, Card} from 'react-bootstrap';

const Groomsmen = () => {
	return (
		<div id="groomsmen-container">
			<div>
			</div>
			<p>{''}</p>
			<div>
				<CardGroup>
					<Card style={{margin: '0.5rem'}}>
						<Card.Img variant="top"
											src="https://res.cloudinary.com/dncx7of7k/image/upload/v1637523871/JobelleJosePhotos/IMG_0678_xmkpfq.jpg"/>
						<Card.Body>
							<Card.Title>Card title</Card.Title>
							<Card.Text>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae debitis deserunt dolor enim error et
								inventore ipsa ipsam natus pariatur placeat, praesentium quod rem sequi soluta suscipit temporibus
								voluptas voluptatem?
							</Card.Text>
						</Card.Body>
					</Card>
					<Card style={{margin: '0.5rem'}}>
						<Card.Img variant="top"
											src="https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80"/>
						<Card.Body>
							<Card.Title>Card title</Card.Title>
							<Card.Text>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium doloribus, maxime nisi nobis
								perferendis recusandae. Aliquid, beatae distinctio eaque et facere fugiat maiores modi neque numquam
								porro repellendus sed totam.
							</Card.Text>
						</Card.Body>
					</Card>
				</CardGroup>
			</div>
		</div>
	);
};

export default Groomsmen;