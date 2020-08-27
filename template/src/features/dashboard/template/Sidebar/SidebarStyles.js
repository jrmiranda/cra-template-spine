import styled from 'styled-components'

export const Nav = styled.nav`
	margin: 0px;
`;

export const Wrapper = styled.div`
	flex: 0 0 auto;
	height: 100vh;
	position: sticky;
	top: 0;
	align-self: flex-start;
  width: ${props => props.collapse ? props.theme.dashboard.sidebar.collapsedWidth : props.theme.dashboard.sidebar.width}px;
  background: ${props => props.theme.dashboard.sidebar.color};
	z-index: 10;
	overflow-x: hidden;
	overflow-y: auto;

	@media screen and (max-width: ${props => props.theme.dashboard.collapseWidth}px) {
		position: ${props => props.collapse ? 'sticky' : 'fixed'};
		display: ${props => props.collapse ? 'none' : 'block'};
	}

	/* width */
	::-webkit-scrollbar {
		width: 8px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		background: rgba(0, 0, 0, 0.1);
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: rgba(0, 0, 0, 0.1);
		border-radius: 8px;
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: rgba(255, 255, 255, 0.1);
	}
`;

export const Header = styled.div`
	width: 100%;
	height: ${props => props.theme.dashboard.header.height}px;
	border-bottom: 1px solid #ffffff11;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Logo = styled.div`
	color: #ffffffd0;
	font-size: 18px;
	font-weight: bold;
`;