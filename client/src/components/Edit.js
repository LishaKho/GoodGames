import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const Edit = (props) => {
	const { id } = props;
	
	const [ name, setName ] = useState("");
	const [ type, setType] = useState("");
	const [ description, setDescription ] = useState("");
	const [ skill1, setSkill1 ] = useState("");
	const [ skill2, setSkill2 ] = useState("");
	const [ skill3, setSkill3 ] = useState("");
	const [ errors, setErrors ] = useState({});

	useEffect(() => {
		axios.get("http://localhost:8000/api/pets/" + id)
			.then((res) => {
				console.log(res.data);
				setName(res.data.name);
				setType(res.data.type);
				setDescription(res.data.description);
				setSkill1(res.data.skill1);
				setSkill2(res.data.skill2);
				setSkill3(res.data.skill3);
			})
			.catch((err) => {
				console.log(err)
			});
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();

		const tempPet = {
			name,
			type,
			description,
			skill1,
			skill2,
			skill3,
		};

		axios.put("http://localhost:8000/api/pets/" + id, tempPet)
			.then((res) => {
				console.log(res);
				navigate("/pets/" + res.data._id);
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
					<label>Type: </label>
					{
						errors.type ? 
							<span className="error-text">{errors.type.message}</span>
							: null
					}
					<input
						type="text"
						name="type"
						value={type}
						onChange={(e) => setType(e.target.value)}
						/>
				</div>
				<div>
					<label>Description: </label>
					{
						errors.description ? 
							<span className="error-text">{errors.description.message}</span>
							: null
					}
					<input
						type="text"
						name="description"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						/>
				</div>
				<div>
					<label>Skill 1: </label>
					{
						errors.skill1 ? 
							<span className="error-text">{errors.skill1.message}</span>
							: null
					}
					<input
						type="text"
						name="skill1"
						value={skill1}
						onChange={(e) => setSkill1(e.target.value)}
						/>
				</div>
				<div>
					<label>Skill 2: </label>
					{
						errors.skill2 ? 
							<span className="error-text">{errors.skill2.message}</span>
							: null
					}
					<input
						type="text"
						name="skill2"
						value={skill2}
						onChange={(e) => setSkill2(e.target.value)}
						/>
				</div>
				<div>
					<label>Skill 3: </label>
					{
						errors.skill3 ? 
							<span className="error-text">{errors.skill3.message}</span>
							: null
					}
					<input
						type="text"
						name="skill3"
						value={skill3}
						onChange={(e) => setSkill3(e.target.value)}
						/>
				</div>
				<div>
					<button className="create-btn"onClick={handleSubmit}>Edit Pet</button>
				</div>
			</form>

		</div>
	)
}

export default Edit;
