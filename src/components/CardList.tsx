import React from 'react';
import { useState } from 'react';
import Card from "./Card"


export interface CardListProps {
	user: string,
	nextPlayer: string,
	ChangePlayer: (user: string) => void,
	CheckWinner: (playerCard: boolean[], user: string) => boolean,
	setPrevNumber: (id: number) => void,
	prevNumber: number,
	pushLog: (playerlog: number) => void,
}

export const CardList: React.FC<CardListProps> = (props) => {
	// CheckWinner
	const { user, nextPlayer, ChangePlayer, CheckWinner, setPrevNumber, prevNumber, pushLog } = props;
	const [cardlist] = useState<boolean[]>(Array(5).fill(false));
	const style = {
		"display": "flex",
		"justifyContent": "left",
		"alignItems": "center"
	}
	const pushUsed = (id: number) => {
		if (prevNumber < id && nextPlayer === user && cardlist[id - 1] === false) {
			cardlist[id - 1] = true;
			ChangePlayer(user);
			CheckWinner(cardlist, user);
			setPrevNumber(id);
			pushLog(id);
		}
	}

	const pass = () => {
		if (!CheckWinner(cardlist, user) && nextPlayer === user) {
			ChangePlayer(user);
			pushLog(-1);
			setPrevNumber(0);
		}
	}

	const color = user === "A" ? "aqua" : "pink";
	return (
		<div>
			<p><strong>Player {user} </strong></p>
			<div className='cards'>
				<div style={style}>
					{
						cardlist.map((card, index) => {
							return (
								<li key={index}>
									<Card number={index + 1} color={card ? "gray" : color} pushUsed={pushUsed} />
								</li>
							)
						})
					}
				</div>
			</div>
			<button onClick={() => pass()}>pass</button>
		</div>
	)
}
