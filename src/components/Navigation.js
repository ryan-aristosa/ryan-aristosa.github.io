import '../styles/Navigation.scss';
import logoReversed from '../assets/logo-reversed.png';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navigation(props) {
	React.useEffect(() => {
		const HAMBURGER = document.querySelector('.hamburger');
		const NAV_LINKS = document.querySelector('nav ul');
		const LINKS = document.querySelectorAll('nav ul li');

		HAMBURGER.addEventListener('click', () => {
			NAV_LINKS.classList.toggle('nav-open');

			LINKS.forEach(link => {
				link.classList.toggle('nav-fade');
			});

			HAMBURGER.classList.toggle('nav-toggle');
		});

		NAV_LINKS.addEventListener('click', () => {
			NAV_LINKS.classList.toggle('nav-open');

			LINKS.forEach(link => {
				link.classList.toggle('nav-fade');
			});

			HAMBURGER.classList.toggle('nav-toggle');
		});
	});

	return(
		<nav className='bc-dcb position-fixed w-100'>
			<div className='mw-1200 h-100 w-100 my-0 mx-auto d-flex'>
				<div className='logo-container h-100'>
					<a href='https://rynrsts.github.io/'>
						<img src={logoReversed} alt='Logo (white)' className='h-100' />
					</a>
				</div>
				<div className='hamburger'>
					<div className='line1'></div>
					<div className='line2'></div>
					<div className='line3'></div>
				</div>
				<ul className='list-unstyled h-100 w-100 d-flex align-items-center me-3'>
					{
						Object.keys(props.navObj).map((key) => (
							<li className='position-relative' key={key}>
								<a 
									href={'#' + (key !== 'home' ? key : '')} 
									className='c-eb text-decoration-none mx-3'
								>
									{/* <i className={props.navObj[key]}></i> */}
									<FontAwesomeIcon icon={props.navObj[key]} />
									&ensp;{key.charAt(0).toUpperCase() + key.slice(1)}
								</a>
							</li>
						))
					}
				</ul>
			</div>
		</nav>
	);
}

export default Navigation;
