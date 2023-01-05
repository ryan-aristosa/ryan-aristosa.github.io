import React from 'react';
import '../../styles/books_and_authors/BooksAndAuthors.scss';
import Authors from './Authors';
import ProjectTitle from '../project/ProjectTitle';
import UseAxios from '../../apis/UseAxios';
import { getAllAuthors } from '../../apis/AuthorsAPI';

function BooksAndAuthors() {
	const [response, error, loading, refetch] = UseAxios({
		axiosInstance: getAllAuthors,
		method: 'GET',
		url: '/',
		requestConfig: {
			headers: {
				'Content-Language': 'en-US'
			}
		}
	});
	let content;

	if (loading) {
		content = <div className='network d-flex justify-content-center align-items-center'>
			<h3 className='fw-600 text-primary'>Loading...</h3>
		</div>
	} else if (!loading && error) {
		content = <div className='loading d-flex justify-content-center align-items-center'>
			<h3 className='fw-600 text-danger'>{error}</h3>
		</div>
	} else if (!loading && !error) {
		content = <Authors response={response} refetch={refetch} />
	}

	return (
		<div className='books-and-authors'>
			<ProjectTitle title='Books and Authors' />
			{content}
		</div>
	);
}

export default BooksAndAuthors;
