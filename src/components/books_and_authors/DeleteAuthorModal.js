import { authorBaseUrl } from 'apis/AuthorsAxios';
import AuthorModal from 'components/books_and_authors/AuthorModal';

function DeleteAuthorModal(props) {
	function deleteAuthor() {
		const deleteRequest = {
			method: 'delete',
			headers: {
				'Content-Type': 'application/json'
			},
			params: {
				id: props.id
			}
		};

		authorBaseUrl(deleteRequest);

		setTimeout(function () {
			props.refetch();
		}, 500);
	}

	return (
		<AuthorModal
			modalId='deleteAuthorModal'
			modalTitle='Delete Author'
			doAction={deleteAuthor}
			buttonName='Delete'
		/>
	);
}

export default DeleteAuthorModal;
