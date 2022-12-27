import '../styles/Experience.scss';

function Experience() {
	const timelineObj = [
		[
			'October 2022 - Present',
			'left',
			[
				'Jr. Software Engineer',
				'Cognizant Softvision',
				'Java | Spring Boot | React | Bootstrap'
			]
		],
		[
			'2018 - August 2022 (College Education)',
			'right',
			[
				'Bachelor of Science in Information Technology',
				'STI College Pasay-EDSA',
				'Magna Cum Laude'
			]
		]
	]

	return(
		<div className='experience' id='experience'>
			<div className='exp-center my-0 mx-auto px-3'>
				<h3 className='exp-title text-center py-5'>Experience</h3>
				<div className='timeline mx-auto position-relative'>
					{
						timelineObj.map(([time, side, details]) => (
							<div className={'time-card position-relative ' + side}>
								<div className='details position-relative'>
									<h6 className='text-center mb-4'>{time}</h6>
									<ul className='px-3'>
										{
											details.map(detail => (
												<li>{detail}</li>
											))
										}
									</ul>
								</div>
							</div>
						))
					}
				</div>
			</div>
		</div>
	);
}

export default Experience;
