import { useEffect } from 'react';
import { bookBaseUrlWithId } from 'apis/BooksAndAuthorsAxios';
import ActionModal from 'components/books_and_authors/ActionModal';
import BookInput from 'components/books_and_authors/BookInput';

function UpdateBook(props) {
	useEffect(() => {
		document.getElementById('updateTitle').value = props.title;
		document.getElementById('updateDescription').value = props.description;
	});

	function updateBook() {
		const url = '/' + props.params.id + '/books';
		const book = {
			title: document.getElementById('updateTitle').value,
			description: document.getElementById('updateDescription').value
		};
		const updateRequest = {
			method: 'put',
			url: url,
			headers: {
				'Content-Type': 'application/json'
			},
			id: props.id,
			data: book
		};

		bookBaseUrlWithId(updateRequest);
		document.getElementById('updateTitle').value = '';
		document.getElementById('updateDescription').value = '';

		setTimeout(function () {
			props.refetch();
		}, 500);
	}

	return (
		<ActionModal
			modalId='updateModal'
			modalTitle='Update Book'
			modalBody={
				<BookInput titleInputId='updateTitle' descriptionInputId='updateDescription' />
			}
			doAction={updateBook}
			buttonName='Update'
		/>
	);
}

export default UpdateBook;
