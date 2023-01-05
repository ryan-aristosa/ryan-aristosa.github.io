import axios from 'axios';

const BASE_URL = 'http://localhost:8081/authors';

export const getAllAuthors = axios.create({
	baseURL: BASE_URL,
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	}
});

export function addAuthor(props) {
	props.url = BASE_URL;
	axios(props);
}

export function deleteAuthorById(props) {
	props.url = BASE_URL;
	axios(props);
}
