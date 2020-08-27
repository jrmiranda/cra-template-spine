import React from 'react'
import styled from 'styled-components'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icon = styled(FontAwesomeIcon)`
	border-radius: 5px;
	margin: 10px 15px;
	cursor: pointer;
	display: block;
	font-size: 22px;
	color: ${props => props.theme.dashboard.sidebar.color};
`;

const Burger = props => {
	return (
		<Icon icon={props.active ? faTimes : faBars} {...props} />
	);
}

export default Burger