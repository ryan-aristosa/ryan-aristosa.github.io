import IconButton from 'components/books_and_authors/IconButton';

function DataCard(props) {
	let addIcon, cardBody;

	if (props.type === 'author') {
		addIcon = <a href={'/authors/' + props.id + '/books'} className='d-flex'>
			<IconButton
				textColor='text-success'
				icon='fa-solid fa-right-to-bracket'
			/>
		</a>;
	}

	const ICON_BUTTONS = (
		<div className='mt-2 d-flex justify-content-end'>
			{addIcon}
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
	);

	if (props.type === 'author') {
		cardBody = <div className='card-body' id={props.name}>
			<p className='p-0 m-0'>Id: {props.id}</p>
			<p className='p-0 mt-2 mb-0 mx-0'>Name: {props.name}</p>
			{ICON_BUTTONS}
		</div>;
	} else if (props.type === 'book') {
		cardBody = <div className='card-body' id={props.title}>
			<p className='p-0 m-0'>Id: {props.id}</p>
			<p className='p-0 mt-2 mb-0 mx-0'>Title: {props.title}</p>
			<p className='p-0 mt-2 mb-0 mx-0'>Description: {props.description}</p>
			{ICON_BUTTONS}
		</div>
	}

	return (
		<div className='c-dcb card w-100 rounded p-2 m-2 text-decoration-none'>
			{cardBody}
		</div>
	);
}

export default DataCard;
