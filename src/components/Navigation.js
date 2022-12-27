import '../styles/Navigation.scss';
import logoReversed from '../assets/logo-reversed.png';
import React from 'react';

function Navigation() {
	const navObj = {
		home: 'fa-solid fa-house',
		experience: 'fa-solid fa-code',
		project: 'fa-solid fa-diagram-project'
	};

	React.useEffect(() => {
		const hamburger = document.querySelector('.hamburger');
		const navLinks = document.querySelector('nav ul');
		const links = document.querySelectorAll('nav ul li');

		hamburger.addEventListener('click', () => {
			navLinks.classList.toggle('nav-open');

			links.forEach(link => {
				link.classList.toggle('nav-fade');
			});

			hamburger.classList.toggle('nav-toggle');
		});

		navLinks.addEventListener('click', () => {
			navLinks.classList.toggle('nav-open');

			links.forEach(link => {
				link.classList.toggle('nav-fade');
			});

			hamburger.classList.toggle('nav-toggle');
		});
	});

	return(
		<nav className='position-fixed w-100'>
			<div className='header-center h-100 w-100 my-0 mx-auto d-flex'>
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
						Object.keys(navObj).map((key) => (
							<li className='position-relative' key={key}>
								<a 
									href={'#' + (key !== 'home' ? key : '')} 
									className='text-decoration-none mx-3'
								>
									<i className={navObj[key]}></i>
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
