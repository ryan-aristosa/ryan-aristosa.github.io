import { authorBaseUrl } from 'apis/BooksAndAuthorsAxios';
import ActionModal from 'components/books_and_authors/ActionModal';

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
			doAction={addAuthor} 
			buttonName='Add'
			type='author'
			authorInputId='addAuthorName'
		/>
	);
}

export default AddAuthor;
