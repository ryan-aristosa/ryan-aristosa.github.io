import React from 'react';
import '../styles/BooksAndAuthors.scss';
import ProjectTitle from './ProjectTitle';
import axios from '../apis/authors';
import useAxios from '../hooks/useAxios';

function BooksAndAuthors() {
	const [authors, error, loading, refetch] = useAxios({
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
			<div className='mw-1200 my-5 mx-auto py-5 px-3'>
				<h3 className='text-center'>Authors</h3>
				<div className='d-flex justify-content-center flex-wrap mt-5 w-100'>
					<div className='card-container d-flex'>
						<div className='card w-100 rounded m-2 p-2'>
							<div className='card-body'>
								<p className='p-0 m-0'>Name:</p>
								<p className='p-0 mt-2 mb-0 mx-0'>Ryan Aristosa</p>
								<div className='mt-2 d-flex justify-content-end'>
									<div className='d-inline px-2 py-1 mx-1 text-primary'>
										<i className='fa-solid fa-pen-to-square'></i>
									</div>
									<div className='d-inline px-2 py-1 mx-1 text-danger'>
										<i className='fa-solid fa-trash'></i>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='card-container d-flex'>
						<div className='card w-100 rounded m-2 p-2'>
							<div className='card-body'>
								<p className='p-0 m-0'>Name:</p>
								<p className='p-0 mt-2 mb-0 mx-0'>Ryan Aristosa</p>
								<div className='mt-2 d-flex justify-content-end'>
									<div className='d-inline px-2 py-1 mx-1 text-primary'>
										<i className='fa-solid fa-pen-to-square'></i>
									</div>
									<div className='d-inline px-2 py-1 mx-1 text-danger'>
										<i className='fa-solid fa-trash'></i>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='card-container d-flex'>
						<div className='card w-100 rounded m-2 p-2'>
							<div className='card-body'>
								<p className='p-0 m-0'>Name:</p>
								<p className='p-0 mt-2 mb-0 mx-0'>Ryan Aristosa</p>
								<div className='mt-2 d-flex justify-content-end'>
									<div className='d-inline px-2 py-1 mx-1 text-primary'>
										<i className='fa-solid fa-pen-to-square'></i>
									</div>
									<div className='d-inline px-2 py-1 mx-1 text-danger'>
										<i className='fa-solid fa-trash'></i>
									</div>
								</div>
							</div>
						</div>
					</div><div className='card-container d-flex'>
						<div className='card w-100 rounded m-2 p-2'>
							<div className='card-body'>
								<p className='p-0 m-0'>Name:</p>
								<p className='p-0 mt-2 mb-0 mx-0'>Ryan Aristosa</p>
								<div className='mt-2 d-flex justify-content-end'>
									<div className='d-inline px-2 py-1 mx-1 text-primary'>
										<i className='fa-solid fa-pen-to-square'></i>
									</div>
									<div className='d-inline px-2 py-1 mx-1 text-danger'>
										<i className='fa-solid fa-trash'></i>
									</div>
								</div>
							</div>
						</div>
					</div><div className='card-container d-flex'>
						<div className='card w-100 rounded m-2 p-2'>
							<div className='card-body'>
								<p className='p-0 m-0'>Name:</p>
								<p className='p-0 mt-2 mb-0 mx-0'>Ryan Aristosa</p>
								<div className='mt-2 d-flex justify-content-end'>
									<div className='d-inline px-2 py-1 mx-1 text-primary'>
										<i className='fa-solid fa-pen-to-square'></i>
									</div>
									<div className='d-inline px-2 py-1 mx-1 text-danger'>
										<i className='fa-solid fa-trash'></i>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BooksAndAuthors;
