import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BooksAndAuthors from 'components/books_and_authors/BooksAndAuthors';
import Content from 'components/landing/Content';
import Footer from 'components/landing/Footer'
import Navigation from 'components/landing/Navigation.js';
import 'styles/App.scss';

// Landing
const LANDING = (
	<div>
		<Navigation />
		<Content />
		<Footer />
	</div>
);

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={LANDING} />
				<Route path='/authors' element={<BooksAndAuthors type='authors' />} />
				<Route path='/authors/:id/books' element={<BooksAndAuthors type='books' />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
