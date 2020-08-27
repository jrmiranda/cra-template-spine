import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isAuthenticated } from 'services/auth'

export const loadRoutes = routeList => (
	routeList.map(({template: Template, component: Component, restrict, ...rest}) => {
		let shouldRender
		let fallback

		switch (restrict) {
			case 'public':
				shouldRender = !isAuthenticated()
				fallback = '/'
				break;
			case 'private':
				shouldRender = isAuthenticated()
				fallback = '/login'
				break;
			default:
				shouldRender = true
				fallback = '/'
				break;
		}

		if (!Template) {
			Template = ({ children }) => (
				<div>{children}</div>
			)
		}

		return (<Route {...rest} render={props => 
				shouldRender ? (
					<Template>
						<Component {...props} />
					</Template>
				) : (
					<Redirect to={fallback} />
				)
			}
		/>)
	})
)