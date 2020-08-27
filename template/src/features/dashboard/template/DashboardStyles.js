import styled from 'styled-components'

export const Layout = styled.div`
	width: 100%;
	min-height: 100vh;
	box-sizing: border-box;
	display: flex;
  flex-wrap: no-wrap;
	flex-direction: ${props => props.horizontal ? 'row' : 'column'};
`;

export const Main = styled.main`
	flex: 1 0 auto;
  /* height: 150vh; */
  padding: 20px;
  background: whitesmoke;
`;

export const Container = styled.div`
	max-width: ${props => props.theme.dashboard.main.width}px;
`;