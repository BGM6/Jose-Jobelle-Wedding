import React from 'react';
import {Card, CardGroup} from 'react-bootstrap';

const Bridesmaid = () => {
	return (
		<div id="groomsmen-container">
			<div>
			</div>
			<p>{''}</p>
			<div >
				<CardGroup >
					<Card style={{margin: '0.5rem'}}>
						<Card.Img variant="top"
											src="https://res.cloudinary.com/dncx7of7k/image/upload/v1637523871/JobelleJosePhotos/IMG_0676_qbofge.jpg"/>
						<Card.Body>
							<Card.Title>Joyceee AKA Trash Mom</Card.Title>
							<Card.Text>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur aut laboriosam odit pariatur
								repellat soluta. Accusamus ipsa iste, iure minus quibusdam vitae. Ad, aliquid earum exercitationem
								perspiciatis quisquam ullam voluptatem.
							</Card.Text>
						</Card.Body>
					</Card>

					<Card style={{margin: '0.5rem'}}>
						<Card.Img variant="top"
											src="https://res.cloudinary.com/dncx7of7k/image/upload/v1637523871/JobelleJosePhotos/IMG_0677_zmgnsj.jpg"/>
						<Card.Body>
							<Card.Title>Card title</Card.Title>
							<Card.Text>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad blanditiis illo nemo officiis placeat quam.
								Aliquid asperiores explicabo fugiat veritatis. Atque consectetur corporis ducimus error fuga sit veniam
								veritatis vitae!
							</Card.Text>
						</Card.Body>
					</Card>
					<Card style={{margin: '0.5rem'}}>
						<Card.Img variant="top"
											src="https://res.cloudinary.com/dncx7of7k/image/upload/v1637523871/JobelleJosePhotos/IMG_0679_zzyahv.jpg"/>
						<Card.Body>
							<Card.Title>Card title</Card.Title>
							<Card.Text>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores consequatur cum, debitis
								dolores earum enim fugiat ipsam iusto laboriosam molestias odit, omnis repellendus sint temporibus. Eum
								qui quidem repellat.
							</Card.Text>
						</Card.Body>
					</Card>
				</CardGroup>
			</div>
		</div>
	);
};

export default Bridesmaid;