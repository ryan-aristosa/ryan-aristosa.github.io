import 'styles/books_and_authors/ActionModal.scss';

function ActionModal(props) {
	return (
		<div
			className='modal fade'
			id={props.modalId}
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
							{props.modalTitle}
						</h1>
						<button
							type='button'
							className='btn-close'
							data-bs-dismiss='modal'
							aria-label='Close'
						></button>
					</div>
					{props.modalBody}
					<div className='modal-footer'>
						<button
							type='button'
							className='btn btn-secondary'
							data-bs-dismiss='modal'
						>Close</button>
						<button
							type='button'
							className='btn btn-danger'
							onClick={props.doAction}
							data-bs-dismiss='modal'
						>
							{props.buttonName}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ActionModal;
