import React from 'react'
import Header from './Header'
import Banner from './Banner'

const Public = ({children}) => {
	return (
		<div>
			<Header/>
			<Banner/>
			<main>
				{children}
			</main>
		</div>
	);
}

export default Public;