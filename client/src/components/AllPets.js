import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';


const AllPets = (props) => {
	const [ allPets, setAllPets ] = useState([]);

	useEffect(() => {
		axios.get("http://localhost:8000/api/pets")
			.then((res) => {
				console.log(res);
			setAllPets(res.data);
			})
			.catch((err) => {
				console.log(err);
			});

	}, []);

	return (
		<div>
            <span>
                <div>
                <h2>All Pets</h2>
                <p>These pets are looking for a good home</p>
                </div>
                <Link className="header-btn" to="/pets/new">add a pet to the shelter</Link>
            </span>
                        <table>
                            <thead>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Actions</th>
                            </thead>
                            {allPets.map((pet, index) => {
                            console.log(pet.name);
                            return (
                            <tbody key={index} >
                                <tr>
                                    <td>{pet.name}</td>
                                    <td>{pet.type}</td>
                                    <td>
                                    <Link to={"/pets/" + pet._id}>Details | </Link>
                                    <Link to={"/pets/" + pet._id + "/edit"}> Edit</Link>
                                </td>
                                </tr>
                                </tbody>
                    )
                })}
			</table>
		</div>
	)
}

export default AllPets;
