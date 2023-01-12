function BookInput(props) {
	return (
		<div className='modal-body'>
			<label htmlFor={props.titleInputId}>Title:</label>
	 		<input type='text' className='form-control mt-1' id={props.titleInputId} />
	 		<label htmlFor={props.descriptionInputId} className='mt-2'>Description:</label>
	 		<input type='text' className='form-control mt-1' id={props.descriptionInputId} />
		</div>
	);
}

export default BookInput;
