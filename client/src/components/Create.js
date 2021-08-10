import React, { useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const Create = (props) => {
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


	const handleSubmit = (e) => {
		e.preventDefault();

		const newGame = {
			name,
			genre,
			myRating,
            status,
		};

		axios.post("http://localhost:8000/api/games", newGame)
			.then((res) => {
				console.log(res);
				navigate("/games/");
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
				<h2>Good Games</h2>
                <p>Know what games you like?</p>
                </div>
                <Link className="header-btn" to="/games">Home</Link>
            </span>

			<form className="create-form" onSubmit={handleSubmit}>
                <div>
				<div className="create-input">
					<label>Game Name: </label>
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
				<div className="create-input">
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
				<div className="create-input">
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
				<div className="create-input">
                <label>Status: </label>
					{
						errors.status ? 
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
					<button className="create-btn" type="submit">Add Game</button>
				</div>
				</div>
			</form>

		</div>
	)
}

export default Create;
