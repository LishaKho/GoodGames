import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import Delete from './Delete';

const Details = (props) => {
	const { id } = props;
    const [ allGames, setAllGames ] = useState([]);
	const [ game, setGame ] = useState({});

	useEffect(() => {
		axios.get("http://localhost:8000/api/games/" + id)
			.then((res) => {
				console.log(res);
				setGame(res.data);
			})
			.catch((err) => {
				console.log(err)
			});
	}, []);


	const updateAfterDelete = (deletedGameId) => {
		let filteredGameArray = allGames.filter((gameObj) => {
			return gameObj._id !== deletedGameId;
		});

		setAllGames(filteredGameArray);
	}

	return (
		<div>
            <span className="details-header">
                <div>
                    <h2>{game.name}</h2>
                </div>
            </span>
			<div>
			{game.images ? <img className="figure-img img-fluid rounded" src={`http://localhost:8000/${game.images}`} /> : ""}
			</div>

			<table className="d-flex justify-content-center">
				<tbody>
					<tr>
						<td className="p-2 bd-highlight">Genre:</td>
						<td className="p-2 bd-highlight">{game.genre}</td>
					</tr>
					<tr>
						<td className="p-2 bd-highlight">My Rating:</td>
						<td className="p-2 bd-highlight">{game.myRating}</td>
					</tr>
					<tr>
						<td className="p-2 bd-highlight">Status:</td>
						<td className="p-2 bd-highlight">{game.status}</td>
					</tr>
				</tbody>
			</table>
			<div>
					<Delete gameId={game._id} afterDelete={updateAfterDelete} />
					<button className="details btn btn-outline-success">
					<Link to={"/games/" + game._id + "/edit"}> Edit</Link>
					</button>
			</div>
		</div>
	)
}

export default Details;
