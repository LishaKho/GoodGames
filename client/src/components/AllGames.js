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
            <span className="all-header">
                <div>
                <h2>All Games</h2>
                </div>
                <button className="button-color">
                    <Link className="header-btn" to="/games/new">add a game</Link>    
                </button> 
            </span>
            <br/>
                        <table className="table table-hover">
                            <thead>
                                <th scope="col">Game</th>
                                <th scope="col">Genre</th>
                                <th scope="col">My Rating</th>
                                <th scope="col">Status</th>
                                <th scope="col">Actions</th>
                            </thead>
                            <br/>
                            <tbody>
                            {allGames.map((game, index) => {
                            console.log(game.name);
                            return (
                                <tr key={index} >
                                    <td>{game.name}</td>
                                    <td>{game.genre}</td>
                                    <td>{game.myRating}</td>
                                    <td>{game.status}</td>
                                    <td>
                                        <button className="button-color">
                                        <Link to={"/games/" + game._id}>Details | </Link>
                                        <Link to={"/games/" + game._id + "/edit"}> Edit</Link>
                                        </button>
                                    </td>
                                </tr>
                                
                    )
                })}
                </tbody>
			</table>
		</div>
	)
}

export default AllGames;
