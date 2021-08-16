import React from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const Delete = (props) => {
	const { gameId, afterDelete } = props;

	const deleteHandler = () => {
		console.log("Delete id: " + gameId);

		axios.delete("http://localhost:8000/api/games/" + gameId)
			.then((res) => {  // successful delete
				console.log("pet delete:")
				console.log(res.data);
				afterDelete(gameId);
                navigate("/games/");
			})
			.catch((err) => {
				console.log(err);
			})
	}

	return (
		<button className="btn btn-outline-danger" onClick={(e) => deleteHandler()}>
			Delete
		</button>
	)
}

export default Delete;
