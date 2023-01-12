import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function AddCard() {
	return (
		<div className='card-container d-flex'>
			<div className='card w-100 rounded m-2 p-2'>
				<div
					className='card-body d-flex justify-content-center align-items-center 
						text-primary'
					data-bs-toggle='modal'
					data-bs-target='#addModal'
				>
					Add&nbsp;
					<FontAwesomeIcon icon='fa-solid fa-plus' />
				</div>
			</div>
		</div>
	);
}

export default AddCard;
