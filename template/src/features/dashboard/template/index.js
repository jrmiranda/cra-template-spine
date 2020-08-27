import React from 'react'
import CollapseProvider from './CollapseContext'
import { Layout, Main, Container } from './DashboardStyles'
import Sidebar from './Sidebar'
import Header from './Header'
import Backdrop from './Backdrop'

const Dashboard = ({children}) => {
	return (
		<CollapseProvider>
			<Backdrop/>
			<Layout horizontal>
				<Sidebar/>
				<Layout>
					<Header/>
					<Main>
						<Container>
							{children}
						</Container>
					</Main>
				</Layout>
			</Layout>
		</CollapseProvider>
	);
}

export default Dashboard;