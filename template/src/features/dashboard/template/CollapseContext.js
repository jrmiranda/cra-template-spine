import React, { createContext, useState, useContext } from 'react'

const CollapseContext = createContext()

const CollapseProvider = ({children}) => {
	const [collapse, setCollapse] = useState(0)

	return (
		<CollapseContext.Provider value={{ collapse, setCollapse }}>
			{children}
		</CollapseContext.Provider>
	)
}

export const useCollapse = () => {
	const context = useContext(CollapseContext)
	if (!context) throw new Error('useCollapse must be used within a CollapseProvider')
	return context
}

export default CollapseProvider