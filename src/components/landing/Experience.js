import '../../styles/landing/Experience.scss';
import '../../styles/App.scss';

function Experience(props) {
	const TIME_CARD = (props.timelineObj).map(([side, time, details, techStack], timeIndex) => (
		<div className={'time-card position-relative ' + side} key={timeIndex}>
			<div className='details position-relative'>
				<h6 className='fw-600 text-center mb-4'>{time}</h6>
				<ul className='list-unstyled'>
					{
						details.map((detail, detailIndex) => (
							<li className='mt-2' key={detailIndex}>{detail}</li>
						))
					}
					<li>
						<div className='p-0 m-0 mt-2'>
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
					</li>
				</ul>
			</div>
		</div>
	));

	return (
		<div className='experience smt-64' id='experience'>
			<div className='mw-1200 my-0 mx-auto px-3'>
				<h3 className='section-title text-center'>Experience</h3>
				<div className='timeline mx-auto mt-5 position-relative'>
					{TIME_CARD}
				</div>
			</div>
		</div>
	);
}

export default Experience;