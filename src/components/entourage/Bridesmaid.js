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
					<Card style={{margin: '0.5rem'}}>
						<Card.Img variant="top"
											src="https://res.cloudinary.com/dncx7of7k/image/upload/v1637523871/JobelleJosePhotos/IMG_0676_qbofge.jpg"/>
						<Card.Body>
							<Card.Title className="text-center">Maid of honor <p>Beverly Joyce Guilas</p></Card.Title>
							<Card.Text>
								The middle child and the most reliable child. Also known as Hayden & Emerson’s
								mom. Beverly is like a second mom telling Jobelle how to live her life. Beverly is Jobelle’s one and
								only sister so obviously she was going to be picked as the Maid of Honor for organizing the upcoming
								shenanigans. Jobelle could not have asked for a better ride or die/partner in crime honoring us with her
								presence on her special day.
							</Card.Text>
						</Card.Body>
					</Card>
					<Card style={{margin: '0.5rem'}}>
						<Card.Img variant="top"
											src="https://res.cloudinary.com/dncx7of7k/image/upload/v1637523871/JobelleJosePhotos/IMG_0679_zzyahv.jpg"/>
						<Card.Body>
							<Card.Title className="text-center">Matron of Honor <p>Venisa Marie Gagui</p></Card.Title>
							<Card.Text>
								Venisa is a bonus girl cousin married into the family. Honestly cannot remember when they first met
								because it was so long ago but they instantly became close. Many memories are made throughout the years.
								The nicest, down to earth and best person to be around. Jobelle could not have asked for a better cousin
								to be her Matron of honor and celebrate with on her wedding day.
							</Card.Text>
						</Card.Body>
					</Card>
					<Card style={{margin: '0.5rem'}}>
						<Card.Img variant="top"
											src="https://res.cloudinary.com/dncx7of7k/image/upload/v1637523871/JobelleJosePhotos/IMG_0677_zmgnsj.jpg"/>
						<Card.Body>
							<Card.Title className="text-center">Bridesmaid<p>Mary Guada Grace Naanep</p></Card.Title>
							<Card.Text>
								Guada and Jobelle met each other a little over 10 years ago in San Fernando, Pampanga Philippines at a
								family party while Jobelle was on vacation. Seeing how their first encounter was very awkward, they
								never knew that they would get along and have the best friendship ever! Guada is also a bonus cousin who
								she made many memories with throughout the years. Guada is a fun time , always smiling & happy go lucky
								personality. Jobelle is so happy to be able to have one of her best friends/cousin celebrate with her on
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