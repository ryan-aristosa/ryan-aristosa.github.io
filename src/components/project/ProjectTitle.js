import 'styles/project/ProjectTitle.scss';

function ProjectTitle(props) {
	return(
		<header className='project-title bc-dcb d-flex align-items-center justify-content-center'>
			<h2 className='c-eb m-0'>{props.title}</h2>
		</header>
	);
}

export default ProjectTitle;
