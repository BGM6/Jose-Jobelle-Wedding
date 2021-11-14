import React from 'react';
import {Carousel} from 'react-bootstrap';

const Photos = () => {
	return (
		<div id="photos">
			<Carousel fade>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://res.cloudinary.com/dncx7of7k/image/upload/v1636919011/JobelleJosePhotos/DSCF2560_r8zea7.jpg"
						alt="First slide"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://res.cloudinary.com/dncx7of7k/image/upload/v1636919012/JobelleJosePhotos/DSCF2555_t5kz99.jpg"
						alt="First slide"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://res.cloudinary.com/dncx7of7k/image/upload/v1636919012/JobelleJosePhotos/DSCF2573_nlrphw.jpg"
						alt="Second slide"
					/>

				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://res.cloudinary.com/dncx7of7k/image/upload/v1636919015/JobelleJosePhotos/DSCF2577_j2p7oa.jpg"
						alt="Third slide"
					/>
				</Carousel.Item>

				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://res.cloudinary.com/dncx7of7k/image/upload/v1636919014/JobelleJosePhotos/DSCF2586_tjz84r.jpg"
						alt="Fourth slide"
					/>
				</Carousel.Item>

				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://res.cloudinary.com/dncx7of7k/image/upload/v1636919017/JobelleJosePhotos/DSCF2617_z3oqto.jpg"
						alt="Fifth slide"
					/>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default Photos;