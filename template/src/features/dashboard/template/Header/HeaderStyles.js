import styled from 'styled-components'

/* export const Logo = styled.div`
	color: #555;
	font-size: 20px;
	font-weight: normal;
`; */

export const Wrapper = styled.header`
  width: 100%;
  height: ${props => props.theme.dashboard.header.height}px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	/* padding: 10px 15px; */
  background: white;
	top: 0;
	align-self: flex-start;
  position: sticky;
	box-sizing: border-box;
	/* box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.15); */
	border-bottom: 1px solid #eaeaea;
	z-index: 5;

	@media screen and (max-width: ${props => props.theme.dashboard.collapseWidth}px) {
		padding-left: ${props => props.collapse ? 0 : props.theme.dashboard.sidebar.width}px;
	}
`;