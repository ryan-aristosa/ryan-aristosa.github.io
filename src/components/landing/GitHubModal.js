import 'styles/landing/GitHubModal.scss';

function GitHubModal() {
	return (
		<div
			className='modal fade'
			id='githubLink'
			data-bs-backdrop='static'
			data-bs-keyboard='false'
			tabIndex='-1'
			aria-labelledby='staticBackdropLabel'
			aria-hidden='true'
		>
			<div className='modal-dialog d-flex align-items-center'>
				<div className='modal-content'>
					<div className='modal-header'>
						<h1 className='modal-title fs-5' id='staticBackdropLabel'>
							Choose GitHub Account
						</h1>
						<button
							type='button'
							className='btn-close'
							data-bs-dismiss='modal'
							aria-label='Close'
						></button>
					</div>
					<div className='modal-body'>
						<a
							href='https://github.com/ryan-aristosa'
							rel='noreferrer'
							target='_blank'
							className='c-eb btn w-100 h-100 d-flex align-items-center 
									justify-content-center'
						>
							ryan-aristosa
						</a>
						<a
							href='https://github.com/rynrsts'
							rel='noreferrer'
							target='_blank'
							className='c-eb btn w-100 h-100 d-flex align-items-center 
									justify-content-center mt-3'
						>
							rynrsts (Personal)
						</a>
					</div>
					<div className='modal-footer'>
						<button
							type='button'
							className='btn btn-secondary'
							data-bs-dismiss='modal'
						>
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default GitHubModal;
