import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AddAuthorModal from './AddAuthorModal';
import { useState } from 'react';
import UpdateAuthorModal from './UpdateAuthorModal';
import DeleteAuthorModal from './DeleteAuthorModal';

function Authors(props) {
	const [clickedId, setClickedId] = useState(0);
	const CALL_SET_CLICKED_ID = event => {
		setClickedId(event.currentTarget.id)
	};

	const AUTHOR_CARDS = props.response.map((data) => (
		<div className='card-container d-flex' key={data.id}>
			<div className='card w-100 rounded m-2 p-2'>
				<div className='card-body'>
					<p className='p-0 m-0'>Id: {data.id}</p>
					<p className='p-0 mt-2 mb-0 mx-0'>Name: {data.name}</p>
					<div className='mt-2 d-flex justify-content-end'>
						<div
							className='d-inline px-2 py-1 mx-1 text-primary'
							data-bs-toggle='modal'
							data-bs-target='#updateAuthorModal'
							id={data.id}
							onClick={CALL_SET_CLICKED_ID}
						>
							<FontAwesomeIcon icon='fa-solid fa-pen-to-square' />
						</div>
						<div
							className='d-inline px-2 py-1 mx-1 text-danger'
							data-bs-toggle='modal'
							data-bs-target='#deleteAuthorModal'
							id={data.id}
							onClick={CALL_SET_CLICKED_ID}
						>
							<FontAwesomeIcon icon='fa-solid fa-trash' />
						</div>
					</div>
				</div>
			</div>
		</div>
	))

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
					{AUTHOR_CARDS}
				</div>
			</div>

			<AddAuthorModal refetch={props.refetch} />
			<UpdateAuthorModal id={clickedId} refetch={props.refetch} />
			<DeleteAuthorModal id={clickedId} refetch={props.refetch} />
		</div>
	);
}

export default Authors;
