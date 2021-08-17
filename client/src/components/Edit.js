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
	const [ uploader, setUploader ] = useState(null)

	const allStatus = [
		"Playing",
		"Played",
		"Want to Play",
	];

	const handleFileOnChange = (e) => {
		console.log(e.target)
		setUploader(e.target.files[0])
	}

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
		let images = ""
		if(uploader) {
			console.log(uploader.size)
			images = uploader
		}
		// const tempGame = {
		// 	name,
		// 	genre,
		// 	myRating,
		// 	status,
		// };

		let tempGame = new FormData()
		tempGame.append('name', name)
		tempGame.append('genre', genre)
		tempGame.append('myRating', myRating)
		tempGame.append('status', status)
		tempGame.append('images', images)
		console.log("newgame", tempGame)
		axios.put("http://localhost:8000/api/games/" + id, tempGame, {headers:{"Content-Type": "multipart/form-data"}})
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
				<div className="edit-header">
					<h2> {name} </h2>
					<p>Make edits to {name} below</p>
				</div>
			</span>
			<form className="row gy-2 gx-3 align-items-center">
				<div className="row mb-3">
					<label class="col-sm-2 col-form-label">Name: </label>
					{
						errors.name ? 
							<span className="invalid-feedback">{errors.name.message}</span>
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
							<span className="invalid-feedback">{errors.genre.message}</span>
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
					<label className="col-sm-2 col-form-label">Rating: </label>
					{
						errors.myRating ? 
							<span className="invalid-feedback">{errors.myRating.message}</span>
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
				<label className="col-sm-2 col-form-label">Status:</label>
					{
						errors.Status ? 
							<span className="invalid-feedback">{errors.status.message}</span>
							: null
					}
					<div className="col-sm-10">
						<select
							className="form-select"
							name="status"
							value={status}
							onChange={(e) => setStatus(e.target.value)}
							>
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
					<input name="imageUploader" id="imageUploader" type="file" accept="image/*" onChange={handleFileOnChange}/>
				</div>
				<div>
					<button className="btn btn-primary"onClick={handleSubmit}>Edit Game</button>
				</div>
			</form>

		</div>
	)
}

export default Edit;
