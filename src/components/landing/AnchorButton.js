function AnchorButton(props) {
	return (
		<a href={props.link} rel='noreferrer' target='_blank' className='btn w-100 h-100 d-flex align-items-center justify-content-center'>
			{props.text}
		</a>
	);
}

export default AnchorButton;
