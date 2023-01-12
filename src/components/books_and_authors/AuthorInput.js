function AuthorInput(props) {
	return (
		<div className='modal-body'>
			<label htmlFor={props.authorInputId}>Name:</label>
			<input type='text' className='form-control mt-1' id={props.authorInputId} />
		</div>
	);
}

export default AuthorInput;
