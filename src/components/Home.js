import '../styles/Home.scss';

function Home() {
	return(
		<div className='home'>
			<div className='mw-1200 my-0 mx-auto px-3'>
				<p className='p-0 m-0'>RYAN ARISTOSA</p>
				<p className='p-0 mx-0 mb-0 mt-5'>
					<i className='fa-solid fa-briefcase'></i>
					&ensp;Jr. Software Engineer at Cognizant Softvision
				</p>
				<p className='p-0 mx-0 mb-0 mt-3'>
					<i className='fa-solid fa-location-dot'></i>
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
						<i className='fab fa-github'></i>
					</a>
					<a 
						href='https://www.linkedin.com/in/rynrsts/' 
						aria-label='LinkedIn' 
						rel='noreferrer' 
						target='_blank'
						className='fab-wrapper linkedin c-eb d-flex align-items-center 
							justify-content-center m-2'
					>
						<i className='fab fa-linkedin-in'></i>
					</a>
					<a 
						href='mailto: ryan.aristosa@softvision.com' 
						aria-label='Email'  
						rel='noreferrer' 
						target='_blank'
						className='fab-wrapper email c-eb d-flex align-items-center 
							justify-content-center m-2'
					>
						<i className='fas fa-envelope'></i>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Home;