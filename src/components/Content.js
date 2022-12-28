import '../styles/Content.scss';
import Experience from './Experience';
import Home from './Home';
import Project from './Project';

// Experience
const timelineObj = [
	[
		'October 2022 - Present',
		'left',
		[
			'Jr. Software Engineer',
			'Cognizant Softvision',
			'Java | Spring Boot | React | Bootstrap'
		]
	],
	[
		'2018 - August 2022 (College)',
		'right',
		[
			'Bachelor of Science in Information Technology',
			'STI College Pasay-EDSA',
			'Magna Cum Laude'
		]
	]
];

function Content() {
	return(
		<div className='content'>
			<Home />
			<Experience timelineObj={timelineObj} />
			<Project />
		</div>
	);
}

export default Content;
