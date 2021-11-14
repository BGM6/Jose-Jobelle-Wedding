import React from 'react';
import {Carousel} from 'react-bootstrap';

const Photos = () => {
	return (
		<div id="photos">
			<Carousel fade>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://res.cloudinary.com/dncx7of7k/image/upload/v1636855260/JoseAndJobelleWedding/DSCF2555_dpgccz.jpg"
						alt="First slide"
					/>

				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://res.cloudinary.com/dncx7of7k/image/upload/v1636855674/JoseAndJobelleWedding/DSCF2586_rridht.jpg"
						alt="Second slide"
					/>

				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://res.cloudinary.com/dncx7of7k/image/upload/v1636855696/JoseAndJobelleWedding/DSCF2609_ifye1b.jpg"
						alt="Third slide"
					/>
				</Carousel.Item>

				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://res.cloudinary.com/dncx7of7k/image/upload/v1636855327/JoseAndJobelleWedding/DSCF2617_rkvzvp.jpg"
						alt="Fourth slide"
					/>
				</Carousel.Item>

				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://res.cloudinary.com/dncx7of7k/image/upload/v1636856077/JoseAndJobelleWedding/DSCF2573_qxet9s.jpg"
						alt="Fifth slide"
					/>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default Photos;