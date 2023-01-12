import axios from 'axios';

const BASE_URL = 'http://localhost:8081/authors';

// Get all authors
export const getAllAuthors = axios.create({
	baseURL: BASE_URL,
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	}
});

// Add and delete author
export function authorBaseUrl(props) {
	props.url = BASE_URL;
	axios(props);
}

// Update author
export function authorBaseUrlWithId(props) {
	props.url = BASE_URL + '/' + props.id;
	axios(props);
}

// Get all books
export const getAllBooks = axios.create({
	baseURL: BASE_URL,
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	}
});

// Add and delete book
export function bookBaseUrl(props) {
	props.url = BASE_URL + props.url;
	axios(props);
}

// Update author
export function bookBaseUrlWithId(props) {
	props.url = BASE_URL + props.url + '/' + props.id;
	axios(props);
}
