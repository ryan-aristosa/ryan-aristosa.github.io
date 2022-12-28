import '../styles/Experience.scss';

function Experience(props) {
	return(
		<div className='experience' id='experience'>
			<div className='mw-1200 my-0 mx-auto py-5 px-3'>
				<h3 className='section-title text-center'>Experience</h3>
				<div className='timeline mx-auto mt-5 position-relative'>
					{
						(props.timelineObj).map(([time, side, details], timeIndex) => (
							<div className={'time-card position-relative ' + side} key={timeIndex}>
								<div className='details position-relative'>
									<h6 className='text-center mb-4'>{time}</h6>
									<ul className='px-3'>
										{
											details.map((detail, detailIndex) => (
												<li className='mt-2' key={detailIndex}>{detail}</li>
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
