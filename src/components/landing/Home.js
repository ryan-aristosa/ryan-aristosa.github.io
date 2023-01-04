import '../../styles/landing/Home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Home() {
	return(
		<div className='home d-flex align-items-center'>
			<div className='mw-1200 my-0 mx-auto text-center px-3 '>
				<p className='p-0 m-0'>RYAN ARISTOSA</p>
				<p className='p-0 mx-0 mb-0 mt-5'>
					<FontAwesomeIcon icon='fa-solid fa-briefcase' />
					&ensp;Jr. Software Engineer at Cognizant Softvision
				</p>
				<p className='p-0 mx-0 mb-0 mt-3'>
					<FontAwesomeIcon icon='fa-solid fa-location-dot' />
					&ensp;Makati, Metro Manila, Philippines
				</p>
				<div className='d-flex flex-wrap justify-content-center mt-4 pt-4'>
					<a 
						href='https://github.com/ryan-aristosa' 
						aria-label='GitHub' 
						rel='noreferrer' 
						target='_blank'
						className='fab-wrapper github c-eb d-flex align-items-center 
							justify-content-center m-2'
					>
						<FontAwesomeIcon icon='fa-brands fa-github' />
					</a>
					<a 
						href='https://www.linkedin.com/in/rynrsts/' 
						aria-label='LinkedIn' 
						rel='noreferrer' 
						target='_blank'
						className='fab-wrapper linkedin c-eb d-flex align-items-center 
							justify-content-center m-2'
					>
						<FontAwesomeIcon icon='fa-brands fa-linkedin-in' />
					</a>
					<a 
						href='mailto: ryan.aristosa@softvision.com' 
						aria-label='Email'  
						rel='noreferrer' 
						target='_blank'
						className='fab-wrapper email c-eb d-flex align-items-center 
							justify-content-center m-2'
					>
						<FontAwesomeIcon icon='fa-solid fa-envelope' />
					</a>
				</div>
			</div>
		</div>
	);
}

export default Home;
