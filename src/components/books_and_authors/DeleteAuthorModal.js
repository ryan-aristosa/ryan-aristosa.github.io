import { deleteAuthorByIdAxios } from '../../apis/AuthorsAxios';

function DeleteAuthorModal(props) {
	function deleteAuthor() {
		const deleteRequest = {
			method: 'delete',
			headers: { 'Content-Type': 'application/json' },
			params: { id: props.id }
		};
		
		deleteAuthorByIdAxios(deleteRequest);
		
		setTimeout(function () {
			props.refetch();
		}, 500);
	}

	return (
		<div
			className='modal fade'
			id='deleteAuthorModal'
			data-bs-backdrop='static'
			data-bs-keyboard='false'
			tabIndex='-1'
			aria-labelledby='staticBackdropLabel'
			aria-hidden='true'
		>
			<div className='modal-dialog'>
				<div className='modal-content'>
					<div className='modal-header'>
						<h1 className='modal-title fs-5' id='staticBackdropLabel'>
							Delete author
						</h1>
						<button
							type='button'
							className='btn-close'
							data-bs-dismiss='modal'
							aria-label='Close'
						></button>
					</div>
					<div className='modal-body'>
						Action cannot be undone. Continue delete?
					</div>
					<div className='modal-footer'>
						<button
							type='button'
							className='btn btn-secondary'
							data-bs-dismiss='modal'
						>Close</button>
						<button
							type='button'
							className='btn btn-danger'
							onClick={deleteAuthor}
							data-bs-dismiss='modal'
						>
							Delete
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DeleteAuthorModal;
