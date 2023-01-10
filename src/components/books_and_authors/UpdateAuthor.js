import { useEffect } from 'react';
import { authorBaseUrlWithId } from 'apis/AuthorsAxios';
import ActionModal from 'components/books_and_authors/ActionModal';

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
			data: author,
			id: props.id
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
			doAction={updateAuthor}
			buttonName='Update'
			type='author'
			inputFieldId='updateAuthorName'
		/>
	);
}

export default UpdateAuthor;
