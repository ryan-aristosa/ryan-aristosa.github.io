import { useParams } from 'react-router-dom';
import UseAxios from 'apis/UseAxios';
import { getAllAuthors, getAllBooks } from 'apis/BooksAndAuthorsAxios';
import AuthorsContent from 'components/books_and_authors/AuthorsContent';
import BooksContent from 'components/books_and_authors/BooksContent';
import ProjectTitle from 'components/project/ProjectTitle';
import 'styles/books_and_authors/BooksAndAuthors.scss';

function BooksAndAuthors(props) {
	const params = useParams();
	let axiosInstanceVar, url, content;
	
	if (props.type === 'authors') {
		axiosInstanceVar = getAllAuthors;
	} else if (props.type === 'books') {
		axiosInstanceVar = getAllBooks;
		url = '/' + params.id + '/books/';
	}

	const [response, error, loading, refetch] = UseAxios({
		axiosInstance: axiosInstanceVar,
		method: 'GET',
		url: url,
		requestConfig: {
			headers: {
				'Content-Language': 'en-US'
			}
		}
	});

	if (loading) {
		content = <div className='network d-flex justify-content-center align-items-center'>
			<h3 className='fw-600 text-primary'>Loading...</h3>
		</div>
	} else if (!loading && error) {
		content = <div className='loading d-flex justify-content-center align-items-center'>
			<h3 className='fw-600 text-danger'>{error}</h3>
		</div>
	} else if (!loading && !error && props.type === 'authors') {
		content = <AuthorsContent response={response} refetch={refetch} />
	} else if (!loading && !error && props.type === 'books') {
		content = <BooksContent params={params} response={response} refetch={refetch} />
	}

	return (
		<div className='books-and-authors'>
			<ProjectTitle title='Books and Authors' />
			{content}
		</div>
	);
}

export default BooksAndAuthors;
