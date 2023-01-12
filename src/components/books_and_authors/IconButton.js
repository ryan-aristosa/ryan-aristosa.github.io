import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function IconButton(props) {
	return (
		<div
			className={'d-inline px-2 py-1 mx-1 ' + props.textColor}
			data-bs-toggle='modal'
			data-bs-target={props.modalId}
			onClick={props.onClick}
		>
			<FontAwesomeIcon icon={props.icon} />
		</div>
	);
}

export default IconButton;
