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
											src="https://res.cloudinary.com/dncx7of7k/image/upload/v1637862947/JobelleJosePhotos/IMG_0746_bsm5gn.jpg"/>
						<Card.Body>
							<Card.Title className="text-center">Best Man<p>Israel Hernandez</p></Card.Title>
							<Card.Text>
								The middle child of 4, Israel is a dedicated father, a caring brother and a down to earth person willing
								to do anything for anyone at the drop of a hat. Jose and Israel have the brotherly relationship that no
								one can break. Jose could not have asked for any one else to bless & honor him on his special day.
							</Card.Text>
						</Card.Body>
					</Card>
					<Card style={{margin: '0.5rem'}}>
						<Card.Img variant="top"
											src="https://res.cloudinary.com/dncx7of7k/image/upload/v1637523871/JobelleJosePhotos/IMG_0678_xmkpfq.jpg"/>
						<Card.Body>
							<Card.Title className="text-center">Best Man<p>David De Jesus</p></Card.Title>
							<Card.Text>
								David has been a long time friend who Jose met online through instagram. A Loyal friend willing to
								crack a joke that will brighten anyone’s day and is always ready to have a good time. They have a
								friendship that will last a lifetime. Jose could not just have one best man on his special day!
							</Card.Text>
						</Card.Body>
					</Card>
				</CardGroup>
			</div>
		</div>
	);
};

export default Groomsmen;