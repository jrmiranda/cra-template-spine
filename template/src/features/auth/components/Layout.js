import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	min-height: 100vh;
	background: linear-gradient(160deg, #008aff, #aa5aaf);
	background: ${props => props.theme.dashboard.sidebar.color};
	background-blend-mode: screen;
`;

export const Container = styled.div`
	flex: 1 1 auto;
	max-width: 400px;
	margin: 10px;
	padding: 20px;
	background: white;
	box-sizing: border-box;
	border-radius: 0px;
`;

export const Title = styled.div`
	font-size: 18px;
	text-align: center;
	margin: 20px;
	border-bottom: 0px solid #ddd;
	color: #555;
	text-transform: uppercase;
	font-weight: bold;
	letter-spacing: 1px;
`;

export const Footer = styled.div`
	margin: 25px 0 0px 0;
	padding-top: 15px;
	border-top: 1px solid #ddd;
	text-align: center;
	font-size: 14px;
	color: #999;

	a {
		color: #999;
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}
`;