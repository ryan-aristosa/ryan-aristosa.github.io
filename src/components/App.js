import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../styles/App.scss';
import BooksAndAuthors from './BooksAndAuthors';
import Content from './Content';
import Footer from './Footer'
import Navigation from './Navigation.js';

// Navigation
const NAV_OBJ = {
	home: 'fa-solid fa-house',
	experience: 'fa-solid fa-code',
	project: 'fa-solid fa-diagram-project'
};

// Landing
const LANDING = (
	<div>
		<Navigation navObj={NAV_OBJ} />
		<Content />
		<Footer />
	</div>
);

function App() {
	return (
		// <div>
		// 	<Navigation navObj={navObj} />
		// 	<Content />
		// 	<Footer />
		// </div>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={LANDING} />
				<Route path='/books-and-authors' element={<BooksAndAuthors />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
