import { authorBaseUrl } from 'apis/BooksAndAuthorsAxios';
import ActionModal from 'components/books_and_authors/ActionModal';

function DeleteAuthor(props) {
	const modalBody = <div className='modal-body'>
		Action cannot be undone. Continue delete? <br />
		Author: {props.name}
	</div>
	
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
			modalBody={modalBody}
			doAction={deleteAuthor}
			buttonName='Delete'
		/>
	);
}

export default DeleteAuthor;
