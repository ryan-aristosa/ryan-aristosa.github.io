function TechStackTag(props) {
	return (
		<div>
			<div
				className={props.bgColor + ' ' + props.color + ' py-1 px-3 me-2 mt-2'}
				key={props.stack}
			>
				{props.stack}
			</div>
		</div>
	);
}

export default TechStackTag;
