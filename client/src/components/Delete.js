import React from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const Delete = (props) => {
	const { petId, afterDelete } = props;

	const deleteHandler = () => {
		console.log("Delete id: " + petId);

		axios.delete("http://localhost:8000/api/pets/" + petId)
			.then((res) => {  // successful delete
				console.log("pet delete:")
				console.log(res.data);
				afterDelete(petId);
                navigate("/pets/");
			})
			.catch((err) => {
				console.log(err);
			})
	}

	return (
		<button className="deleteBtn" onClick={(e) => deleteHandler()}>
			Adopt 
		</button>
	)
}

export default Delete;
