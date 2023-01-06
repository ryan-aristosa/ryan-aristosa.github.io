import { useEffect } from 'react';
import { updateAuthorByIdAxios } from '../../apis/AuthorsAxios';

function UpdateAuthorModal(props) {
    function updateAuthor() {
		const author = { name: document.getElementById('updateAuthorName').value }
		const updateRequest = {
			method: 'patch',
			headers: { 'Content-Type': 'application/json' },
			data: author,
			id: props.id
		};
		
		updateAuthorByIdAxios(updateRequest);
		document.getElementById('updateAuthorName').value = '';
		
        setTimeout(function () {
			props.refetch();
		}, 500);
	}

    useEffect(() => {
		document.getElementById('updateAuthorName').value = props.name;
	});

    return (
        <div
            className='modal fade'
            id='updateAuthorModal'
            data-bs-backdrop='static'
            data-bs-keyboard='false'
            tabIndex='-1'
            aria-labelledby='staticBackdropLabel'
            aria-hidden='true'
        >
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h1 className='modal-title fs-5' id='staticBackdropLabel'>
                            Update author
                        </h1>
                        <button
                            type='button'
                            className='btn-close'
                            data-bs-dismiss='modal'
                            aria-label='Close'
                        ></button>
                    </div>
                    <div className='modal-body'>
                        <label htmlFor='authorName'>Name:</label>
                        <input type='text' className='form-control' id="updateAuthorName" />
                    </div>
                    <div className='modal-footer'>
                        <button
                            type='button'
                            className='btn btn-secondary'
                            data-bs-dismiss='modal'
                        >Close</button>
                        <button
                            type='button'
                            className='btn btn-danger'
                            onClick={updateAuthor}
                            data-bs-dismiss='modal'
                        >
                            Update
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateAuthorModal;
