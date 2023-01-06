import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../styles/App.scss';
import BooksAndAuthors from './books_and_authors/BooksAndAuthors';
import Content from './landing/Content';
import Footer from './landing/Footer'
import Navigation from './landing/Navigation.js';

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
		<BrowserRouter>
			<Routes>
				<Route path='/' element={LANDING} />
				<Route path='/authors' element={<BooksAndAuthors />} />
				{/* <Route path='/authors/:id' element={<BooksAndAuthors />} /> */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
