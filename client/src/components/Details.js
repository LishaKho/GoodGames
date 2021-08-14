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
            <span>
                <div>
                    <h2>Game Details</h2>
                    <p>Details about: {game.name}</p>
                </div>
				<div className="details-btn">
                    <Link className="details-link" to="/games">back to home</Link>
					<Delete gameId={game._id} afterDelete={updateAfterDelete} />
				</div>
            </span>
			<table>
				<tbody>
					<tr>
						<td className="details-td">Genre:</td>
						<td className="details-td">{game.genre}</td>
					</tr>
					<tr>
						<td className="details-td">My Rating:</td>
						<td className="details-td">{game.myRating}</td>
					</tr>
					<tr>
						<td className="details-td">Status:</td>
						<td className="details-td">{game.status}</td>
					</tr>
					<tr>
						<td className="details-td">Game Image:</td>
						<td className="details-td">{game.file}</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default Details;
