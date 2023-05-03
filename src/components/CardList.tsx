import React from 'react';
import { useState } from 'react';
import Card from "./Card"
import { isPropertySignature } from 'typescript';


type CardListProps = {
	user: string,
	nextPlayer: string,
	ChangePlayer: (user: string) => void,
	// CheckWinner
	CheckWinner: (playerCard: number[], user: string) => boolean,
	setPrevNumber: (id: number) => void,
	prevNumber: number,
}
const CardList: React.FC<CardListProps> = (props) => {
	// CheckWinner
	const { user, nextPlayer, ChangePlayer, CheckWinner, setPrevNumber, prevNumber } = props;
	const [cardlist, setCardList] = useState<number[]>([1, 2, 3, 4, 5]);
	const [usedArray, setUsedArray] = useState<number[]>([]);
	const style = {
		"display": "flex",
		"justifyContent": "left",
		"alignItems": "center"
	}
	const pushUsed = (id: number) => {
		console.log (prevNumber);
		if (prevNumber < id && nextPlayer === user) {
			const tmpCardList = cardlist.filter(Card => Card !== id);
			setCardList(tmpCardList);
			setUsedArray([...usedArray, id]);
			ChangePlayer(user);
			CheckWinner(tmpCardList, user);
			setPrevNumber(id);
		}
	}

	const pass = () => {
		ChangePlayer(user);
		setPrevNumber(0);
	}
	const color = user === "A" ? "aqua" : "pink";
	return (
		<div>
			<p><strong>Player {user} </strong></p>
			<p>Player Card</p>
			<div className='cards'>
				<div style={style}>
					{
						cardlist.map(card =>
							<Card number={card} color={color} pushUsed={pushUsed} />)
					}
				</div>
				<p>Used Card</p>
				<div>
					{
						usedArray.map(card =>
							<Card number={card} color='gray' pushUsed={() => { }} />)
					}
				</div>
			</div>
			<button onClick={() => pass()}>pass</button>
		</div>
	)
}

export default CardList;