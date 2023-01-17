import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logoReversed from 'assets/logo-reversed.png';
import 'styles/landing/About.scss'

function About() {
	const [flag, setFlag] = useState(true);
	const [heartIcon, setHeartIcon] = useState('fa-regular fa-heart');
	const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * 99999) + 10000);

	useEffect(() => {
		const HEART = document.querySelector('.heart');
		document.getElementById('numberOfHearts').innerHTML = randomNum;

		HEART.addEventListener('click', () => {
			if (flag) {
				setRandomNum(randomNum + 1);
				document.getElementById('heart-icon').style.color = 'red';
				setHeartIcon('fa-solid fa-heart');
				setFlag(false);
			}
		});
	});

	return (
		<div className='about-me smt-64' id='about'>
			<div className='mw-1200 my-0 mx-auto px-3'>
				<h3 className='section-title text-center'>About Me</h3>
				<div className='tweet-container mt-5 mx-auto p-5'>
					<div className='head d-flex align-items-center position-relative'>
						<div className='profile'>
							<img src={logoReversed} alt='Profile' className='h-100 w-100' />
						</div>
						<div className='ms-3'>
							<p className='fw-600 m-0 p-0'>Ryan Aristosa</p>
							<p className='fs-14 m-0 p-0 text-muted'>
								{/* Now&nbsp;
								<FontAwesomeIcon icon='fa-solid fa-earth-americas' /> */}
								@ryan-aristosa
							</p>
						</div>
						<div className='ellipsis position-absolute'>
							<FontAwesomeIcon icon='fa-solid fa-ellipsis' />
						</div>
					</div>
					<div className='mt-4'>
					<p className='m-0 p-0'>
							I am Ryan Aristosa, but you can call me R. I am a Jr. Software 
							Engineer at Cognizant Softvision, with some knowledge in building 
							and connecting frontend to backend using services and API.
						</p>
						<p className='mt-3 mb-0 mx-0 p-0'>
							I am a graduate of Bachelor of Science in Information Technology
							in STI College Pasay-EDSA as Magna Cum Laude. Me and my team are 
							also awarded with Best Capstone Project Awardee.
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
					<div className='bottom mt-4 d-flex position-relative'>
						<div className='heart text-muted d-flex align-items-center'>
							<span className='heart-icon' id='heart-icon'>
								<FontAwesomeIcon icon={heartIcon} />
							</span>
							<span className='fs-14 text-muted ms-2' id='numberOfHearts'></span>
						</div>
						<div className='now fs-14 position-absolute text-muted'>Now</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
