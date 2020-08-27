import React from 'react'
import styled from 'styled-components'
/* import wave from './banner.svg' */

const Wrapper = styled.div`
	position: relative;
	width: 100%;
	height: 400px;
	background: linear-gradient(160deg, #008aff, #aa5aaf);
	background-blend-mode: screen;
	text-align: center;
	/* padding: 80px 0 0 0; */
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Text = styled.div`
	display: block;
	font-size: 38px;
	font-weight: bold;
	color: white;
`;

/* const Shape = styled.img`
	position: absolute;
	left: 0;
	bottom: 0;
`; */

const Banner = () => {
	return (
		<div>
			<Wrapper>
				<Text>Some text here</Text>
				{/* <Shape src={wave} alt=""/> */}
			</Wrapper>
		</div>
	);
}

export default Banner;