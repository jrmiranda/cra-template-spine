import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FieldWrapper = styled.div`
	background: #e5e5e5;
	border: 0px solid #ccc;
	margin: 8px;
	padding: 5px;
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const FieldIcon = styled(FontAwesomeIcon)`
	font-size: 16px;
	color: #888;
	display: block;
	margin: 0 8px;
`;

const Input = styled.input`
	background: transparent;
	border: 0;
	margin: 0;
	padding: 10px 8px;
	outline: none;
	font-size: 15px;
	border-radius: 0px;
`;

export const Button = styled.button`
	background: ${props => props.theme.dashboard.sidebar.color};
	opacity: 1;
	color: white;
	border: 0;
	margin: 8px;
	padding: 14px;
	font-size: 14px;
	border-radius: 0px;
	font-weight: 600;
	outline: none;
	text-transform: uppercase;
	cursor: pointer;

	&:hover {
		filter: brightness(110%)
	}
	
	&:active {
		filter: brightness(90%)
	}
`;

export const Error = styled.div`
	font-size: 14px;
	color: red;
	margin: 5px;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
`;

export const Field = ({ icon, ...rest }) => {
	return (
		<FieldWrapper>
			<FieldIcon icon={icon} />
			<Input {...rest} />
		</FieldWrapper>
	);
}


export default Input