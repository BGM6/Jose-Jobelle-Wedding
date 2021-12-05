import React from 'react';
import {Card, CardGroup} from 'react-bootstrap';

const Bridesmaid = () => {
	return (
		<div id="groomsmen-container">
			<p>{''}</p>
			<div>
				<CardGroup>
					<Card style={{margin: '0.5rem'}}>
						<Card.Img variant="top"
											src="https://res.cloudinary.com/dncx7of7k/image/upload/v1637523871/JobelleJosePhotos/IMG_0676_qbofge.jpg"/>
						<Card.Body>
							<Card.Title className="text-center">Maid of honor <p>Beverly Joyce Guilas</p></Card.Title>
							<Card.Text>
								Jobelle’s best friend, middle child of three and most reliable child. Also known as, Hayden and
								Emerson’s
								mom. Beverly has always acted as a second mom, she tells Jobelle how to live her life so who better to
								be the Maid of Honor than the one who knows her best? It is an absolute dream come true for Jobelle to
								have her ride or die/partner-in-crime to bless her with her presence on such a special day.
							</Card.Text>
						</Card.Body>
					</Card>
					<Card style={{margin: '0.5rem'}}>
						<Card.Img variant="top"
											src="https://res.cloudinary.com/dncx7of7k/image/upload/v1637523871/JobelleJosePhotos/IMG_0679_zzyahv.jpg"/>
						<Card.Body>
							<Card.Title className="text-center">Matron of Honor <p>Venisa Marie Gagui</p></Card.Title>
							<Card.Text>
								Venisa is a bonus cousin who married into the family. A strong family bond quickly formed shortly after
								meeting followed by years of memories and adventures. Venisa is one of the nicest, down to earth person
								to be around. Jobelle could not have asked for a better cousin to be her Matron of Honor to celebrate
								with on her wedding day.
							</Card.Text>
						</Card.Body>
					</Card>
					<Card style={{margin: '0.5rem'}}>
						<Card.Img variant="top"
											src="https://res.cloudinary.com/dncx7of7k/image/upload/v1637523871/JobelleJosePhotos/IMG_0677_zmgnsj.jpg"/>
						<Card.Body>
							<Card.Title className="text-center">Bridesmaid<p>Mary Guada Grace Naanep</p></Card.Title>
							<Card.Text>
								Guada and Jobelle met each other a little over 10 years ago at a family party while vacationing in the
								Philippines. Seeing how their first encounter was very awkward, they never imagined that they would
								become the best of friends. With Guada’s free spirit and Jobelle’s constant need for adventure, they
								make the best duo. Jobelle is elated to be able to have one of her best friends/cousin celebrate her on
								her wedding day.
							</Card.Text>
						</Card.Body>
					</Card>
				</CardGroup>
			</div>
		</div>
	);
};

export default Bridesmaid;