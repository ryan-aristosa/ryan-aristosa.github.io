import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'styles/landing/Footer.scss'

function Footer() {
	return (
		<footer className='bc-dcb c-eb text-center py-5'>
			<div className='links d-flex justify-content-center'>
				<a
					href='https://github.com/ryan-aristosa'
					aria-label='GitHub'
					rel='noreferrer'
					target='_blank'
					className='fab-wrapper c-dcb d-flex align-items-center 
						justify-content-center mx-2'
				>
					<FontAwesomeIcon icon='fa-brands fa-github' />
				</a>
				<a
					href='https://www.linkedin.com/in/rynrsts/'
					aria-label='LinkedIn'
					rel='noreferrer'
					target='_blank'
					className='fab-wrapper c-dcb d-flex align-items-center 
						justify-content-center mx-2'
				>
					<FontAwesomeIcon icon='fa-brands fa-linkedin-in' />
				</a>
				<a
					href='mailto: ryan.aristosa@softvision.com'
					aria-label='Email'
					rel='noreferrer'
					target='_blank'
					className='fab-wrapper c-dcb d-flex align-items-center 
						justify-content-center mx-2'
				>
					<FontAwesomeIcon icon='fa-solid fa-envelope' />
				</a>
			</div>
			<div className='copyright mt-4'>
				&copy; 2023&nbsp;
				<a href='https://ryan-aristosa.github.io/' className='c-eb text-decoration-none'>
					Ryan Aristosa.
				</a>
				&nbsp;All rights reserved.
			</div>
		</footer>
	);
}

export default Footer;
