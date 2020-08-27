import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const breakpoint = 767;

const Wrapper = styled.header`
	position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: transparent;
	z-index: 10;

	@media screen and (max-width: ${breakpoint}px) {
		background: indigo;
	}
`;

const Container = styled.div`
	max-width: 1200px;
  margin: 0 auto;
	padding: 5px;
  border: 0px dashed white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

	@media screen and (max-width: ${breakpoint}px) {
		width: 100%;
		flex-direction: column;
	}
`;

const Top = styled.div`
	width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0;

	@media screen and (max-width: ${breakpoint}px) {
		padding: 10px;
	}
`;

const Logo = styled.div`
	width: 100px;
	font-size: 22px;
	font-weight: bold;
	color: white;
`;

const Burger = styled.div`
	width: 40px;
  height: 40px;
  background: purple;
  cursor: pointer;
	display: none;

	@media screen and (max-width: ${breakpoint}px) {
		display: block;
	}
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0 5px;
  padding: 0;
	white-space: nowrap;
  
  li {
    display: block;
  }

	@media screen and (max-width: ${breakpoint}px) {
		width: 100%;
		flex-direction: column;
		display: ${props => props.visible ? 'block' : 'none'};
	}
`;

const StyledLink = styled(Link)`
	font-size: 14px;
	color: white;
	opacity: 0.5;
	display: block;
	margin: 10px 0px;
	padding: 2px 10px;
	border-bottom: 0px solid transparent;
	text-decoration: none;
	text-transform: uppercase;
	font-weight: bold;
	letter-spacing: 1px;
	transition: .3s ease all;

	&:hover {
		color: white;
		opacity: 0.9;
		border-bottom: 0px solid white;
	}
`;

const Item = ({children, ...rest}) => (
	<li>
		<StyledLink {...rest}>{children}</StyledLink>
	</li>
)

const Header = () => {
	const [visible, setVisible] = useState(false)

	const toggleVisible = (e) => {
		e.preventDefault()
		setVisible(!visible)
	}

	return (
		<Wrapper>
			<Container>	
				<Top>
					<Logo>SomeLogo</Logo>
					<Burger onClick={toggleVisible} />
				</Top>
				<Menu visible={visible}>
					<Item to='/'>Home</Item>
					<Item to='/admin/users'>How it Works</Item>
					<Item to='/pricing'>Pricing</Item>
					<Item to='/about'>About</Item>
					<Item to='/'>Contact</Item>
				</Menu>
			</Container>
		</Wrapper>
	);
}

export default Header;