import { addAuthorAxios } from '../../apis/AuthorsAxios';

function AddAuthorModal(props) {
	function addAuthor() {
		const author = { name: document.getElementById('addAuthorName').value }
		const addRequest = {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			data: author
		};

		addAuthorAxios(addRequest);
		document.getElementById('addAuthorName').value = '';

		setTimeout(function () {
			props.refetch();
		}, 500);
	}

	return (
		<div
			className='modal fade'
			id='addAuthorModal'
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
							Add author
						</h1>
						<button
							type='button'
							className='btn-close'
							data-bs-dismiss='modal'
							aria-label='Close'
						></button>
					</div>
					<div className='modal-body'>
						<label htmlFor='authorName'>Name:</label>
						<input type='text' className='form-control' id="addAuthorName" />
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
							onClick={addAuthor}
							data-bs-dismiss='modal'
						>
							Add
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AddAuthorModal;
