import '../../styles/landing/Project.scss';

function Project(props) {
	const PROJECT = props.projectObj.map(([title, detail, techStack, openSource, demo]) => (
		<div className='card-container d-flex' key={title}>
			<div className='c-eb card w-100 border-0 rounded m-2 p-2'>
				<div className='card-body d-flex flex-column justify-content-between'>
					<div>
						<h6 className='fw-600'>{title}</h6>
						<p className='p-0 mx-0 mb-0 mt-4'>{detail}</p>
						<div className='tech-stack p-0 mx-0 mb-0 mt-4'>
							{
								techStack.map(([stack, bgColor, color]) => (
									<div
										className={bgColor + ' ' + color +
											' d-inline-block py-2 px-3 me-2 mt-2'}
										key={stack}
									>
										{stack}
									</div>
								))
							}
						</div>
					</div>
					<div className='buttons mt-5 d-flex'>
						<div className='w-50 pe-2'>
							<a
								href={openSource}
								rel='noreferrer'
								target='_blank'
								className='btn w-100 h-100'
							>
								Open Source
							</a>
						</div>
						<div className='w-50 ps-2'>
							<a href={demo} rel='noreferrer' target='_blank' className='btn w-100 h-100'>
								Try it!
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	));

	return (
		<div className='project smt-64' id='project'>
			<div className='mw-1200 my-0 mx-auto px-3'>
				<h3 className='section-title text-center'>Project</h3>
				<div className='d-flex justify-content-center flex-wrap mt-5 w-100'>
					{PROJECT}
				</div>
			</div>
		</div>
	);
}

export default Project;
