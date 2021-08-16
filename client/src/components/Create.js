import React, { useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const Create = (props) => {
	const [ name, setName ] = useState("");
	const [ genre, setGenre] = useState("");
	const [ myRating, setMyRating ] = useState("");
	const [ uploader, setUploader ] = useState(null);
	const [ status, setStatus ] = useState("");
	const [ errors, setErrors ] = useState({});

	const allStatus = [
		"Playing",
		"Played",
		"Want to Play",
	];

const handleFileOnChange = (e) => {
	console.log(e.target)
	setUploader(e.target.files[0])
}
	const handleSubmit = (e) => {
		e.preventDefault();
		let images = ""
		if(uploader) {
			console.log(uploader.size)
			images = uploader
		}
		// const newGame = {
		// 	name,
		// 	genre,
		// 	myRating,
        //     status,
		// 	images: uploader
		// };
		let newGame = new FormData()
		newGame.append('name', name)
		newGame.append('genre', genre)
		newGame.append('myRating', myRating)
		newGame.append('status', status)
		newGame.append('images', images)
		console.log("newgame", newGame)
		//return

		axios.post("http://localhost:8000/api/games", newGame, {headers:{"Content-Type": "multipart/form-data"}})
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
                <div className="cr-header">
				<h2>Good Games</h2>
                <p>Know what games you like?</p>
                </div>
            </span>

			<form className="row gy-2 gx-3 align-items-center" onSubmit={handleSubmit}>
                <div>
				<div className="row mb-3">
					<label className="col-sm-2 col-form-label">Name: </label>
					{
						errors.name ? 
							<span className="error-text">{errors.name.message}</span>
							: null
					}
					<div className="col-sm-10">
						<input
							className="form-control"
							type="text"
							name="name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							/>
					</div>
				</div>
				<div className="row mb-3">
					<label className="col-sm-2 col-form-label">Genre: </label>
					{
						errors.genre ? 
							<span className="error-text">{errors.genre.message}</span>
							: null
					}
					<div className="col-sm-10">
						<input
							className="form-control"
							type="text"
							name="genre"
							value={genre}
							onChange={(e) => setGenre(e.target.value)}
							/>
					</div>
				</div>
				<div className="row mb-3">
					<label className="col-sm-2 col-form-label">My Rating: </label>
					{
						errors.myRating ? 
							<span className="error-text">{errors.myRating.message}</span>
							: null
					}
					<div className="col-sm-10">
						<input
							className="form-control"
							type="text"
							name="myRating"
							value={myRating}
							onChange={(e) => setMyRating(e.target.value)}
							/>
					</div>
				</div>
				<div className="row mb-3">
                <label className="col-sm-2 col-form-label">Status: </label>
					{
						errors.status ? 
							<span className="error-text">{errors.status.message}</span>
							: null
					}
					<div className="col-sm-10">
						<select
							className="form-control"
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
				</div>
				<div>
					<input className="form-control form-control-sm" name="imageUploader" id="imageUploader" type="file" accept="image/*" onChange={handleFileOnChange}/>
				</div>
				<br/>
				<div>
					<button type="button" className="btn btn-primary" type="submit">Add Game</button>
				</div>
				</div>
			</form>

		</div>
	)
}

export default Create;
