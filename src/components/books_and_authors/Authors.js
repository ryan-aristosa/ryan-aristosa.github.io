import { addAuthorRequest, deleteAuthorRequest } from '../../apis/AuthorsRequest';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Authors(props) {
	let clickedId = 0;

	const setClickedId = event => {
		clickedId = event.currentTarget.id;
	};

	function addAuthor() {
		addAuthorRequest(document.getElementById('authorName').value);
		document.getElementById('authorName').value = '';
		delayRefetch();
	}

	function deleteAuthor() {
		deleteAuthorRequest(clickedId);
		delayRefetch();
	}

	function delayRefetch() {
		setTimeout(function () {
			props.refetch();
		}, 500);
	}

	return (
		<div>
			<div className='mw-1200 my-5 mx-auto py-5 px-3'>
				<h3 className='text-center'>Authors</h3>
				<div className='d-flex justify-content-center flex-wrap mt-5 w-100'>
					<div className='card-container d-flex'>
						<div className='card w-100 rounded m-2 p-2'>
							<div
								className='card-body d-flex justify-content-center 
									align-items-center text-primary'
								data-bs-toggle='modal'
								data-bs-target='#addAuthorModal'
							>
								Add&nbsp;
								<FontAwesomeIcon icon='fa-solid fa-plus' />
							</div>
						</div>
					</div>
					{
						props.response.map((data) => (
							<div className='card-container d-flex' key={data.id}>
								<div className='card w-100 rounded m-2 p-2'>
									<div className='card-body'>
										<p className='p-0 m-0'>Id: {data.id}</p>
										<p className='p-0 mt-2 mb-0 mx-0'>Name: {data.name}</p>
										<div className='mt-2 d-flex justify-content-end'>
											<div className='d-inline px-2 py-1 mx-1 text-primary'>
												<FontAwesomeIcon icon='fa-solid fa-pen-to-square' />
											</div>
											<div
												className='d-inline px-2 py-1 mx-1 text-danger'
												data-bs-toggle='modal'
												data-bs-target='#deleteAuthorModal'
												id={data.id}
												onClick={setClickedId}
											>
												<FontAwesomeIcon icon='fa-solid fa-trash' />
											</div>
										</div>
									</div>
								</div>
							</div>
						))
					}
				</div>
			</div>

			{/* Add author */}
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
							<input type='text' className='form-control' id="authorName" />
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

			{/* Delete author */}
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
		</div>
	);
}

export default Authors;
