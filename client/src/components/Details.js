import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import Delete from './Delete';

const Details = (props) => {
	const { id } = props;
    const [ allPets, setAllPets ] = useState([]);
	const [ pet, setPet ] = useState({});
    const [ like, SetLike ] = useState("");

	useEffect(() => {
		axios.get("http://localhost:8000/api/pets/" + id)
			.then((res) => {
				console.log(res);
				setPet(res.data);
			})
			.catch((err) => {
				console.log(err)
			});
	}, []);


	const updateAfterDelete = (deletedPetId) => {
		let filteredPetArray = allPets.filter((petObj) => {
			return petObj._id !== deletedPetId;
		});

		setAllPets(filteredPetArray);
	}

	return (
		<div>
            <span>
                <div>
                    <h2>Pet Details</h2>
                    <p>Details about: {pet.name}</p>
                </div>
				<div className="details-btn">
                    <Link className="details-link" to="/pets">back to home</Link>
					<Delete petId={pet._id} afterDelete={updateAfterDelete} />
				</div>
            </span>
			<table>
				<tbody>
					<tr>
						<td className="details-td">Type:</td>
						<td className="details-td">{pet.type}</td>
					</tr>
					<tr>
						<td className="details-td">Description:</td>
						<td className="details-td">{pet.description}</td>
					</tr>
					<tr>
						<td className="details-td">Skills:</td>
						<td className="details-td">{pet.skill1}</td>
                        <td className="details-td">{pet.skill2}</td>
                        <td className="details-td">{pet.skill3}</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default Details;
