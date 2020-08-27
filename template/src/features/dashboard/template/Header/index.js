import React from 'react'
import { Wrapper } from './HeaderStyles'
import { useCollapse } from '../CollapseContext'
import Burger from './Burger'

const Header = () => {
	const { collapse, setCollapse } = useCollapse()

	return (
		<Wrapper collapse={collapse}>
			<Burger onClick={() => setCollapse(!collapse)} />
			<div>LogoLogoLogo</div>
			<div>User</div>
		</Wrapper>
	);
}

export default Header