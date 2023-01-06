import '../../styles/landing/Content.scss';
import Experience from './Experience';
import Home from './Home';
import Project from './Project';

// Experience
const TIMELINE_OBJ = [
	[
		'left',
		'October 2022 - Present',
		['Jr. Software Engineer', 'Cognizant Softvision'],
		[
			['Java', 'color-java', 'c-eb'],
			['Spring Boot', 'color-spring-boot', 'c-eb'],
			['Hibernate', 'color-hibernate', 'c-eb'],
			['React', 'color-react', 'c-dcb'],
			['Bootstrap', 'color-bootstrap', 'c-eb']
		]
	],
	[
		'right',
		'2018 - August 2022 (College)',
		[
			'Bachelor of Science in Information Technology',
			'STI College Pasay-EDSA',
			'Magna Cum Laude'
		],
		[
			['Java', 'color-java', 'c-eb'],
			['C#', 'color-c-sharp', 'c-eb'],
			['HTML', 'color-html', 'c-eb'],
			['CSS', 'color-css', 'c-eb'],
			['Javascript', 'color-javascript', 'c-dcb'],
			['PHP', 'color-php', 'c-eb'],
			['Bootstrap', 'color-bootstrap', 'c-eb'],
			['Python', 'color-python', 'c-dcb']
		]
	]
];

// Project
const PROJECT_OBJ = [
	[
		'books-and-authors',
		'Spring boot CRUD application for books and authors',
		[
			['Java', 'color-java', 'c-eb'],
			['Spring Boot', 'color-spring-boot', 'c-eb']
		],
		'https://github.com/ryan-aristosa/books-and-authors',
		'/authors'
	],
	[
		'skill-and-employees',
		'Springboot application for skills and employees with authorization and actuator',
		[
			['Java', 'color-java', 'c-eb'],
			['Spring Boot', 'color-spring-boot', 'c-eb']
		],
		'https://github.com/ryan-aristosa/skills-and-employees',
		'/skills-and-employees'
	],
	[
		'billing',
		'Week 5 Final Exam',
		[
			['Java', 'color-java', 'c-eb'],
			['Spring Boot', 'color-spring-boot', 'c-eb']
		],
		'https://github.com/ryan-aristosa/billing',
		'/billing'
	]
]

function Content() {
	return (
		<div className='content'>
			<Home />
			<Experience timelineObj={TIMELINE_OBJ} />
			<Project projectObj={PROJECT_OBJ} />
		</div>
	);
}

export default Content;
