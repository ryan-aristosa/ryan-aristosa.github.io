import { useState } from 'react';
import AddCard from 'components/books_and_authors/AddCard';
import AddAuthor from 'components/books_and_authors/AddAuthor';
import DataCard from 'components/books_and_authors/DataCard';
import DeleteAuthor from 'components/books_and_authors/DeleteAuthor';
import UpdateAuthor from 'components/books_and_authors/UpdateAuthor';

function AuthorsContent(props) {
	const [clickedId, setClickedId] = useState(0);
	const [clickedName, setClickedName] = useState('');
	// const setClickedCard = event => {
	// 	setClickedId(event.currentTarget.id);
	// 	setClickedName(event.currentTarget.parentNode.parentNode.id);
	// 	console.log(clickedId)
	// };

	const CARDS = props.response.map((data) => (
		<div className='card-container d-flex' key={data.id}>
			{/* <a href={'/authors/' + data.id} className='w-100'> */}
				<DataCard 
					name={data.name} 
					id={data.id} 
					setClickedId={() => { setClickedId(data.id) }} 
					setClickedCard={() => {
						setClickedId(data.id);
						setClickedName(data.name);
					}}
				/>
			{/* </a> */}
		</div>
	))

	return (
		<div>
			<div className='mw-1200 my-5 mx-auto py-5 px-3'>
				<h3 className='text-center'>Authors</h3>
				<div className='d-flex justify-content-center flex-wrap mt-5 w-100'>
					<AddCard />
					{CARDS}
				</div>
			</div>

			<AddAuthor refetch={props.refetch} />
			<UpdateAuthor name={clickedName} id={clickedId} refetch={props.refetch} />
			<DeleteAuthor id={clickedId} refetch={props.refetch} />
		</div>
	);
}

export default AuthorsContent;
