import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AddAuthorModal from 'components/books_and_authors/AddAuthorModal';
import DeleteAuthorModal from 'components/books_and_authors/DeleteAuthorModal';
import IconButton from 'components/books_and_authors/IconButton';
import UpdateAuthorModal from 'components/books_and_authors/UpdateAuthorModal';

function Authors(props) {
	const [clickedId, setClickedId] = useState(0);
	const [clickedName, setClickedName] = useState('');
	const setClickedCard = event => {
		setClickedId(event.currentTarget.id);
		setClickedName(event.currentTarget.parentNode.parentNode.id);
	};

	const AUTHOR_CARDS = props.response.map((data) => (
		<div className='card-container d-flex' key={data.id}>
			{/* <a href={'/authors/' + data.id} className='w-100'> */}
			<div className='c-dcb card w-100 rounded p-2 m-2 text-decoration-none'>
				<div className='card-body' id={data.name}>
					<p className='p-0 m-0'>Id: {data.id}</p>
					<p className='p-0 mt-2 mb-0 mx-0'>Name: {data.name}</p>
					<div className='mt-2 d-flex justify-content-end'>
						<IconButton 
							textColor='text-primary' 
							modalId='#updateAuthorModal' 
							authorId={data.id}
							onClick={setClickedCard}
							icon='fa-solid fa-pen-to-square'
						/>
						<IconButton 
							textColor='text-danger' 
							modalId='#deleteAuthorModal' 
							authorId={data.id}
							onClick={setClickedCard}
							icon='fa-solid fa-trash'
						/>
					</div>
				</div>
			</div>
			{/* </a> */}
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
			{/* <AuthorModal 
				modalId='addAuthorModal' 
				modalTitle='Add Title' 
				buttonName='Add' 
				inputFieldId='addAuthorName' 
				method='post' 
				refetch={props.refetch}
			/> */}
			<UpdateAuthorModal name={clickedName} id={clickedId} refetch={props.refetch} />
			{/* <AuthorModal 
				modalId='updateAuthorModal' 
				modalTitle='Update Title' 
				buttonName='Update' 
			/> */}
			<DeleteAuthorModal id={clickedId} refetch={props.refetch} />
		</div>
	);
}

export default Authors;
