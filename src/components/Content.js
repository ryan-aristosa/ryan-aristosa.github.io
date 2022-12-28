import '../styles/Content.scss';
import Experience from './Experience';
import Footer from './Footer';
import Home from './Home';

function Content() {
	return(
		<div className='content'>
			<Home />
			<Experience />
			<Footer />
		</div>
	);
}

export default Content;
