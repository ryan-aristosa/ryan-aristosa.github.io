import '../styles/Home.scss';

function Home() {
	return(
		<div className='home'>
			<div className='home-center my-0 mx-auto px-3'>
				<p>RYAN ARISTOSA</p>
				<p className='mt-5'>
					<i className='fa-solid fa-briefcase'></i>
					&ensp;Jr. Software Engineer at Cognizant Softvision
				</p>
				<p className='mt-3'>
					<i className='fa-solid fa-location-dot'></i>
					&ensp;Makati, Metro Manila, Philippines
				</p>
				<div className='d-flex flex-wrap justify-content-center mt-4 pt-4'>
					<a 
						href='https://github.com/ryan-aristosa' 
						aria-label='GitHub' 
						rel='noreferrer' 
						target='_blank'
						className='fab-wrapper github d-flex align-items-center 
							justify-content-center m-2'
					>
						<i className='fab fa-github'></i>
					</a>
					<a 
						href='https://www.linkedin.com/in/rynrsts/' 
						aria-label='LinkedIn' 
						rel='noreferrer' 
						target='_blank'
						className='fab-wrapper linkedin d-flex align-items-center 
							justify-content-center m-2'
					>
						<i className='fab fa-linkedin-in'></i>
					</a>
					<a 
						href='mailto: ryan.aristosa@softvision.com' 
						aria-label='Email'  
						rel='noreferrer' 
						target='_blank'
						className='fab-wrapper email d-flex align-items-center 
							justify-content-center m-2'
					>
						<i class='fas fa-envelope'></i>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Home;