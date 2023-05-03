import React from 'react';

type CardProps = {
	number: number;
	color: string;
	pushUsed: (id: number) => void;
}
const  Card: React.FC<CardProps> = React.memo(props => {
	const { number, color, pushUsed } = props;
	const style = {
		"width": "30px",
		"height": "50px",
		"backgroundColor": color,
		textAlign: "center" as "center",
		"lineHeight": "50px",
		"margin" : "4px",
		"border" : "0px",
	}
	return (
		<button style={style} onClick={() => pushUsed(number)}>
			<p>{number}</p>
		</button>
	)
}, )

export default Card;