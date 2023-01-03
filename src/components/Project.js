import '../styles/Project.scss';

function Project() {
	return(
		<div className='project smt-64' id='project'>
			<div className='mw-1200 my-0 mx-auto py-5 px-3'>
				<h3 className='section-title text-center'>Project</h3>
				<div className='d-flex justify-content-center flex-wrap mt-5 w-100'>
					<div className='card-container d-flex'>
						<div className='c-eb card w-100 border-0 rounded m-2 p-2'>
							<div className='card-body'>
								<h6 className='fw-600'>books-and-authors</h6>
								<p className='p-0 mx-0 mb-0 mt-3'>
									Spring boot CRUD application for books and authors
								</p>
								<p className='p-0 mx-0 mb-0 mt-3'>
									Java | Spring boot
								</p>
								<div className='mt-4 d-flex'>
									<div className='w-50 pe-2'>
										<a 
											href='https://github.com/ryan-aristosa/books-and-authors' 
											rel='noreferrer' 
											target='_blank' 
											className='btn w-100 h-100'
										>
											Open Source
										</a>
									</div>
									<div className='w-50 ps-2'>
										<a 
											href='/books-and-authors' 
											rel='noreferrer' 
											target='_blank' 
											className='btn w-100 h-100'
										>
											Try it!
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Project;
