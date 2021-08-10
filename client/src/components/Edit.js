import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const Edit = (props) => {
	const { id } = props;
	
	const [ name, setName ] = useState("");
	const [ genre, setGenre] = useState("");
	const [ myRating, setMyRating ] = useState("");
	const [ status, setStatus ] = useState("");
	const [ errors, setErrors ] = useState({});

	const allStatus = [
		"Playing",
		"Played",
		"Want to Play",
	];

	useEffect(() => {
		axios.get("http://localhost:8000/api/games/" + id)
			.then((res) => {
				console.log(res.data);
				setName(res.data.name);
				setGenre(res.data.genre);
				setMyRating(res.data.myrating);
				setStatus(res.data.status);
			})
			.catch((err) => {
				console.log(err)
			});
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();

		const tempGame = {
			name,
			genre,
			myRating,
			status,
		};

		axios.put("http://localhost:8000/api/games/" + id, tempGame)
			.then((res) => {
				console.log(res);
				navigate("/games/" + res.data._id);
			})
			.catch((err) => {
				console.log(err);
				console.log(err.response.data.errors);
				if(err.response.data.errors) {
					setErrors(err.response.data.errors);
				}
			})
	}

	return (
		<div>
			<span>
				<div>
					<h2>Pet Shelter</h2>
					<p> Edit {name} </p>
				</div>
				<Link className="header-btn" to="/pets">back to home</Link>
			</span>
			<form className="edit-form">
				<div>
					<label>Name: </label>
					{
						errors.name ? 
							<span className="error-text">{errors.name.message}</span>
							: null
					}
					<input
						type="text"
						name="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						/>
				</div>
				<div>
					<label>Genre: </label>
					{
						errors.genre ? 
							<span className="error-text">{errors.genre.message}</span>
							: null
					}
					<input
						type="text"
						name="genre"
						value={genre}
						onChange={(e) => setGenre(e.target.value)}
						/>
				</div>
				<div>
					<label>My Rating: </label>
					{
						errors.myRating ? 
							<span className="error-text">{errors.myRating.message}</span>
							: null
					}
					<input
						type="text"
						name="myRating"
						value={myRating}
						onChange={(e) => setMyRating(e.target.value)}
						/>
				</div>
				<div>
				<label>Status</label>
					{
						errors.Status ? 
							<span className="error-text">{errors.status.message}</span>
							: null
					}
					<select
						name="status"
						value={status}
						onChange={(e) => setStatus(e.target.value)}
						>
						{/* this option is required if I use an empty string as the default value */}
						{/* If you want to set a specific default string, you must put it in state to start! */}
						<option value=""></option>
						{
							allStatus.map((statusType, index) => (
								<option value={statusType} key={index}>{statusType}</option>
							))
						}
					</select>
				</div>
				<div>
					<button className="create-btn"onClick={handleSubmit}>Edit Game</button>
				</div>
			</form>

		</div>
	)
}

export default Edit;
