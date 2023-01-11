import { useEffect } from 'react';
import { bookBaseUrlWithId } from 'apis/BooksAndAuthorsAxios';
import ActionModal from 'components/books_and_authors/ActionModal';

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
			doAction={updateBook}
			buttonName='Update'
			type='book'
			titleInputId='updateTitle'
			descriptionInputId='updateDescription'
		/>
	);
}

export default UpdateBook;
