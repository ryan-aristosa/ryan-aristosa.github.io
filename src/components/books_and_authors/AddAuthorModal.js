import { authorBaseUrl } from 'apis/AuthorsAxios';
import AuthorModal from 'components/books_and_authors/AuthorModal';

function AddAuthorModal(props) {
	function addAuthor() {
		const author = {
			name: document.getElementById('addAuthorName').value
		}
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
		<AuthorModal 
			modalId='addAuthorModal' 
			modalTitle='Add Author' 
			doAction={addAuthor} 
			buttonName='Add'
			inputFieldId='addAuthorName'
		/>
	);
}

export default AddAuthorModal;
