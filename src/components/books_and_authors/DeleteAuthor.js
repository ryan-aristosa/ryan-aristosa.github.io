import { authorBaseUrl } from 'apis/AuthorsAxios';
import ActionModal from 'components/books_and_authors/ActionModal';

function DeleteAuthor(props) {
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
		<ActionModal
			modalId='deleteModal'
			modalTitle='Delete Author'
			doAction={deleteAuthor}
			buttonName='Delete'
			type='author'
		/>
	);
}

export default DeleteAuthor;
