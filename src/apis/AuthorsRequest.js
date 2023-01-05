import { addAuthor, deleteAuthorById } from './AuthorsAxios';

export function addAuthorRequest(name) {
	const author = { name: name }
	const addRequest = {
		method: 'post',
		headers: {
			'Content-Type': 'application/json'
		},
		data: author
	};

	addAuthor(addRequest);
}

export function deleteAuthorRequest(id) {
	const deleteRequest = {
		method: 'delete',
		headers: {
			'Content-Type': 'application/json'
		},
		params: {
			id: id
		}
	};

	deleteAuthorById(deleteRequest);
}
