import Content from 'components/landing/Content';
import Footer from 'components/landing/Footer';
import GitHubModal from 'components/landing/GitHubModal';
import Navigation from 'components/landing/Navigation.js';
import 'styles/App.scss';

function App() {
	return (
		<div>
			<Navigation />
			<Content />
			<Footer />
			<GitHubModal />
		</div>
	);
}

export default App;
