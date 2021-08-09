import React, { useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const Create = (props) => {
	const [ name, setName ] = useState("");
	const [ type, setType ] = useState("");
	const [ description, setDescription ] = useState("");
    const [ skill1, setSkill1 ] = useState("");
    const [ skill2, setSkill2 ] = useState("");
    const [ skill3, setSkill3 ] = useState("");
	const [ errors, setErrors ] = useState({});


	const handleSubmit = (e) => {
		e.preventDefault();

		const newPet = {
			name,
			type,
			description,
            skill1,
            skill2,
            skill3,
		};

		axios.post("http://localhost:8000/api/pets/", newPet)
			.then((res) => {
				console.log(res);
				navigate("/pets/");
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
                <p>Know a Pet Needing a Home?</p>
                </div>
                <Link className="header-btn" to="/pets">Home</Link>
            </span>

			<form className="create-form" onSubmit={handleSubmit}>
                <div>
                    <p>Pet:</p>
				<div className="create-input">
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
				<div className="create-input">
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
				<div className="create-input">
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
					<button className="create-btn" type="submit">Add Pet</button>
				</div>
                </div>
                <div>
                    <p>Skills (optional):</p>
                <div className="create-input">
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
                <div className="create-input">
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
                <div className="create-input">
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
                </div>
			</form>

		</div>
	)
}

export default Create;
