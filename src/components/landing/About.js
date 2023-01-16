import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from 'assets/logo.png';
import 'styles/landing/About.scss'

function About() {
	function downloadCV() {
		const fileName = 'CV - Ryan Aristosa.pdf';

		fetch(fileName).then(response => {
			response.blob().then(blob => {
				const fileURL = window.URL.createObjectURL(blob);
				let alink = document.createElement('a');

				alink.href = fileURL;
				alink.download = fileName;
				alink.click();
			})
		})
	}

	return (
		<div className='about-me smt-64' id='about'>
			<div className='mw-1200 my-0 mx-auto px-3'>
				<h3 className='section-title text-center'>About Me</h3>
				<div className='about-container mt-5 mx-auto p-4'>
					<div className='head d-flex align-items-center'>
						<div className='profile'>
							<img src={logo} alt='Profile' className='h-100 w-100 p-2' />
						</div>
						<div className='ms-4'>
							<p className='fw-600 m-0 p-0'>Ryan Aristosa</p>
							<p className='m-0 p-0 text-muted'>
								Now&nbsp;
								<FontAwesomeIcon icon='fa-solid fa-earth-americas' />
							</p>
						</div>
					</div>
					<hr />
					<div>
						<p className='m-0 p-0'>
							I am Ryan Aristosa, but you can call
							me <span className='fw-600'>R</span>.
							I am a <span className='fw-600'>Jr. Software Engineer</span> at
							Cognizant Softvision, with some knowledge in building and connecting
							frontend to backend using services and API.
						</p>
						<p className='mt-3 mb-0 mx-0 p-0'>
							I am a graduate of Bachelor of Science in Information Technology
							in STI College Pasay-EDSA
							as <span className='fw-600'>Magna Cum Laude</span>. Me and my team
							are also awarded
							with <span className='fw-600'>Best Capstone Project Awardee</span>.
						</p>
						<p className='mt-3 mb-0 mx-0 p-0'>
							My hobbies are playing games, and watching anime and tv series. I am
							also a casual fan of K-pop, due to its songs and dance choreography.
							On some free time, I try to upskill myself through reading and trying
							different things.
						</p>
						<p className='mt-3 mb-0 mx-0 p-0'>
							Lastly, I can say that I am perseverant, optimistic, responsible, and
							well-organized.
						</p>
					</div>
				</div>
				<div className='btn-container mt-5 d-flex justify-content-center'>
					<button className='btn' onClick={downloadCV}>Download CV</button>
				</div>
			</div>
		</div>
	);
}

export default About;
