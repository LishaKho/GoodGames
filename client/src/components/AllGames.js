import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';


const AllGames = (props) => {
	const [ allGames, setAllGames ] = useState([]);

	useEffect(() => {
		axios.get("http://localhost:8000/api/games")
			.then((res) => {
				console.log(res);
			setAllGames(res.data);
			})
			.catch((err) => {
				console.log(err);
			});

	}, []);

	return (
		<div>
            <span>
                <div>
                <h2>All Games</h2>
                <p>Suggest Games</p>
                </div>
                <Link className="header-btn" to="/games/new">add a game</Link>
            </span>
                        <table>
                            <thead>
                                <th>Game</th>
                                <th>Genre</th>
                                <th>My Rating</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </thead>
                            {allGames.map((game, index) => {
                            console.log(game.name);
                            return (
                            <tbody key={index} >
                                <tr>
                                    <td>{game.name}</td>
                                    <td>{game.genre}</td>
                                    <td>{game.myRating}</td>
                                    <td>{game.status}</td>
                                    <td>
                                    <Link to={"/games/" + game._id}>Details | </Link>
                                    <Link to={"/games/" + game._id + "/edit"}> Edit</Link>
                                </td>
                                </tr>
                                </tbody>
                    )
                })}
			</table>
		</div>
	)
}

export default AllGames;
