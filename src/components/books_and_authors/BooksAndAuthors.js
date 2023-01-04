import React from 'react';
import '../../styles/books_and_authors/BooksAndAuthors.scss';
import Authors from './Authors';
import ProjectTitle from '../project/ProjectTitle';
import UseAxios from '../../apis/UseAxios';
import axios from '../../apis/AuthorsAPI';

function BooksAndAuthors() {
	const [response, error, loading, refetch] = UseAxios({
        axiosInstance: axios,
        method: 'GET',
        url: '/',
        requestConfig: {
            headers: {
                'Content-Language': 'en-US'
            }
        }
    });

	return (
		<div className='books-and-authors'>
			<ProjectTitle title='Books and Authors' />
			{loading &&
				<div className='network d-flex justify-content-center align-items-center'>
					<h3 className='fw-600 text-primary'>Loading...</h3>
				</div>
			}
			{error &&
				<div className='loading d-flex justify-content-center align-items-center'>
					<h3 className='fw-600 text-danger'>{error}</h3>
				</div>
			}
			{!error &&
				<Authors response={response} />
			}
		</div>
	);
}

export default BooksAndAuthors;
