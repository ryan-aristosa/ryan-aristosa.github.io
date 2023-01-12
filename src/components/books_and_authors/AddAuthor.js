import { authorBaseUrl } from 'apis/BooksAndAuthorsAxios';
import ActionModal from 'components/books_and_authors/ActionModal';
import AuthorInput from 'components/books_and_authors/AuthorInput';

function AddAuthor(props) {
	function addAuthor() {
		const author = {
			name: document.getElementById('addAuthorName').value
		};
		const addRequest = {
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			},
			data: author
		};

		authorBaseUrl(addRequest);
		document.getElementById('addAuthorName').value = '';

		setTimeout(function () {
			props.refetch();
		}, 500);
	}

	return (
		<ActionModal
			modalId='addModal'
			modalTitle='Add Author'
			modalBody={<AuthorInput authorInputId='addAuthorName' />}
			doAction={addAuthor}
			buttonName='Add'
		/>
	);
}

export default AddAuthor;
