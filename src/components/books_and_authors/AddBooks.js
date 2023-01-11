import { bookBaseUrl } from 'apis/BooksAndAuthorsAxios';
import ActionModal from 'components/books_and_authors/ActionModal';

function AddBooks(props) {
	function addBook() {
		const url = '/' + props.params.id + '/books';
		const book = {
			title: document.getElementById('addTitle').value,
			description: document.getElementById('addDescription').value
		};
		const addRequest = {
			method: 'post',
			url: url,
			headers: {
				'Content-Type': 'application/json'
			},
			data: book
		};

		bookBaseUrl(addRequest);
		document.getElementById('addTitle').value = '';
		document.getElementById('addDescription').value = '';

		setTimeout(function () {
			props.refetch();
		}, 500);
	}

	return (
		<ActionModal 
			modalId='addModal' 
			modalTitle='Add Book' 
			doAction={addBook} 
			buttonName='Add'
			type='book'
			titleInputId='addTitle'
			descriptionInputId='addDescription'
		/>
	);
}

export default AddBooks;
