import { bookBaseUrl } from 'apis/BooksAndAuthorsAxios';
import ActionModal from 'components/books_and_authors/ActionModal';

function DeleteBook(props) {
	function deleteBook() {
		const url = '/' + props.params.id + '/books';
		const deleteRequest = {
			method: 'delete',
			url: url,
			headers: {
				'Content-Type': 'application/json'
			},
			params: {
				id: props.id
			}
		};

		bookBaseUrl(deleteRequest);

		setTimeout(function () {
			props.refetch();
		}, 500);
	}

	return (
		<ActionModal
			modalId='deleteModal'
			modalTitle='Delete Book'
			doAction={deleteBook}
			buttonName='Delete'
			type='book'
		/>
	);
}

export default DeleteBook;
