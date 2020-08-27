import React from 'react'
import styled from 'styled-components'
import { useCollapse } from './CollapseContext'

const Backdrop = () => {
	const { collapse, setCollapse } = useCollapse()

	return (
		<StyledBackdrop collapse={collapse} onClick={() => setCollapse(true)} />
	);
}

const StyledBackdrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0.2);
	z-index: 5;
	display: none;

	@media screen and (max-width: ${props => props.theme.dashboard.collapseWidth}px) {
		display: ${props => props.collapse ? 'none' : 'block'};
	}
`;

export default Backdrop