import UseAxios from 'apis/UseAxios';
import { getAllAuthors } from 'apis/AuthorsAxios';
import AuthorsContent from 'components/books_and_authors/AuthorsContent';
import ProjectTitle from 'components/project/ProjectTitle';
import 'styles/books_and_authors/BooksAndAuthors.scss';

function BooksAndAuthors(props) {
	let axiosInstanceVar;
	let content;
	
	if (props.type === 'authors') {
		axiosInstanceVar = getAllAuthors;
	}

	const [response, error, loading, refetch] = UseAxios({
		axiosInstance: axiosInstanceVar,
		method: 'GET',
		url: '/',
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
	}

	return (
		<div className='books-and-authors'>
			<ProjectTitle title='Books and Authors' />
			{content}
		</div>
	);
}

export default BooksAndAuthors;
