import React, { useLayoutEffect } from 'react'
import { Wrapper, Header, Logo, Nav } from './SidebarStyles'
import Menu from './Menu'
import { useCollapse } from '../CollapseContext'
import theme from 'styles/theme'

const Sidebar = () => {
	const { collapse, setCollapse } = useCollapse()

	useLayoutEffect(() => {
		const handleResize = () => {
			if (window.innerWidth <= theme.dashboard.collapseWidth) {
				setCollapse(true)
			} else {
				setCollapse(false)
			}
		}
		handleResize()
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return (
		<Wrapper collapse={collapse}>
			{/* <Header>
				<Logo>{collapse ? 'A' : 'AlgumaLogo'}</Logo>
			</Header> */}
			<Nav>
				<Menu/>
			</Nav>
		</Wrapper>
	);
}

export default Sidebar