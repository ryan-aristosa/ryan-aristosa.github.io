import { useEffect } from 'react';
import { authorBaseUrlWithId } from 'apis/BooksAndAuthorsAxios';
import ActionModal from 'components/books_and_authors/ActionModal';
import AuthorInput from 'components/books_and_authors/AuthorInput';

function UpdateAuthor(props) {
	useEffect(() => {
		document.getElementById('updateAuthorName').value = props.name;
	});

	function updateAuthor() {
		const author = {
			name: document.getElementById('updateAuthorName').value
		};
		const updateRequest = {
			method: 'patch',
			headers: {
				'Content-Type': 'application/json'
			},
			id: props.id,
			data: author
		};

		authorBaseUrlWithId(updateRequest);
		document.getElementById('updateAuthorName').value = '';

		setTimeout(function () {
			props.refetch();
		}, 500);
	}

	return (
		<ActionModal
			modalId='updateModal'
			modalTitle='Update Author'
			modalBody={<AuthorInput authorInputId='updateAuthorName' />}
			doAction={updateAuthor}
			buttonName='Update'
		/>
	);
}

export default UpdateAuthor;
