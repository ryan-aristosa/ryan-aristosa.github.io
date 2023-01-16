import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AddBooks from 'components/books_and_authors/AddBooks';
import AddCard from 'components/books_and_authors/AddCard';
import DataCard from 'components/books_and_authors/DataCard';
import UpdateBook from 'components/books_and_authors/UpdateBook';
import DeleteBook from 'components/books_and_authors/DeleteBook';

function BooksContent(props) {
	const [clickedId, setClickedId] = useState(0);
	const [clickedTitle, setClickedTitle] = useState('');
	const [clickedDescription, setClickedDescription] = useState('');

	const CARDS = props.response.map((data) => (
		<div className='card-container d-flex' key={data.id}>
			<DataCard
				type='book'
				id={data.id}
				title={data.title}
				description={data.description}
				setClickedCard={() => {
					setClickedId(data.id);
					setClickedTitle(data.title);
					setClickedDescription(data.description);
				}}
				setClickedId={() => { setClickedId(data.id) }}
			/>
		</div>
	))

	return (
		<div>
			<div className='mw-1200 my-5 mx-auto py-5 px-3'>
				<div className='text-center position-relative'>
					<a href='/authors'>
						<h4 className='c-dcb position-absolute mt-1'>
							<FontAwesomeIcon icon='fa-solid fa-arrow-left' />
						</h4>
					</a>
					<h3>Books</h3>
				</div>
				<div className='d-flex justify-content-center flex-wrap mt-5 w-100'>
					<AddCard />
					{CARDS}
				</div>
			</div>

			<AddBooks params={props.params} refetch={props.refetch} />
			<UpdateBook
				params={props.params}
				title={clickedTitle}
				description={clickedDescription}
				id={clickedId}
				refetch={props.refetch}
			/>
			<DeleteBook
				params={props.params}
				title={clickedTitle}
				description={clickedDescription}
				id={clickedId}
				refetch={props.refetch}
			/>
		</div>
	);
}

export default BooksContent;