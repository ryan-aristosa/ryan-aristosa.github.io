import IconButton from 'components/books_and_authors/IconButton';

function DataCard(props) {
	return (
		<div className='c-dcb card w-100 rounded p-2 m-2 text-decoration-none'>
			<div className='card-body' id={props.name}>
				<p className='p-0 m-0'>Id: {props.id}</p>
				<p className='p-0 mt-2 mb-0 mx-0'>Name: {props.name}</p>
				<div className='mt-2 d-flex justify-content-end'>
					<IconButton
						textColor='text-primary'
						modalId='#updateModal'
						onClick={props.setClickedCard}
						icon='fa-solid fa-pen-to-square'
					/>
					<IconButton
						textColor='text-danger'
						modalId='#deleteModal'
						onClick={props.setClickedId}
						icon='fa-solid fa-trash'
					/>
				</div>
			</div>
		</div>
	);
}

export default DataCard;
