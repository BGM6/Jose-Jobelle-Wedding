import '../css/footer.css';
import React from 'react';

const Footer = () => {
	return (
		<div className="footer-container">
			<div className="footer">
				<p>Copyright &copy; 2021 Bryan Guilas</p>
				<a href="https://github.com/BGM6" target="_blank" rel="noreferrer"><i
					className="fab fa-github"/></a>
				<a href="https://www.linkedin.com/in/bryan-guilas-9a00891ab/" target="_blank" rel="noreferrer"><i
					className="fab fa-linkedin"/></a>
				<a href="https://wakatime.com/@BGM6" target="_blank" rel="noreferrer"><i
					className="fas fa-keyboard"/></a>
				<a href="https://www.bryanjguilas.com/" target="_blank" rel="noreferrer"><i
					className="fas fa-id-card"/></a>
			</div>
		</div>
	);
};

export default Footer;