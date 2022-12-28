import '../styles/App.scss';
import Content from './Content';
import Footer from './Footer'
import Navigation from './Navigation.js';

// Navigation
const navObj = {
	home: 'fa-solid fa-house',
	experience: 'fa-solid fa-code',
	project: 'fa-solid fa-diagram-project'
};

function App() {
	return (
		<div>
			<Navigation navObj={navObj} />
			<Content />
			<Footer />
		</div>
	);
}

export default App;
