import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icon = styled(FontAwesomeIcon)`
	flex: 0 0 auto;
	display: block;
	color: ${props => props.theme.dashboard.sidebar.textColor};
	font-size: 16px;
	opacity: ${props => props.theme.dashboard.sidebar.textOpacity};
	margin-right: 10px;
`;

export const Item = styled.li`
	display: block;

	a {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		color: ${props => props.theme.dashboard.sidebar.textColor};
		opacity: ${props => props.theme.dashboard.sidebar.textOpacity};
		font-weight: 500;
		text-decoration: none;
		font-size: 16px;
		padding: 5px 15px;

		&:hover,
		&.active {
			background: ${props => props.theme.dashboard.sidebar.textBgHover};

			&, ${Icon} {
				opacity: .9;
			}
		}
	}
`;

const LinkText = styled.div`
	
`;

export const MenuLink = ({children, icon, ...props}) => {
	return (
		<Item>
			<NavLink {...props}>
				<Icon icon={icon} fixedWidth />
				<LinkText>{children}</LinkText>
			</NavLink>
		</Item>
	);
}

export const Separator = styled.div`
	font-size: 12px;
	color: ${props => props.theme.dashboard.sidebar.textColor};
	opacity: 0.2;
	text-transform: uppercase;
	letter-spacing: 2px;
	font-weight: bold;
	padding: 15px 15px 15px 15px;
	text-align: center;
`;

export const Wrapper = styled.ul`
	margin: 0;
	padding: 0;

	${Separator} {
		display: ${props => props.collapse ? 'none' : 'block'};
		/* padding: ${props => props.collapse ? '15px 5px' : '15px'}; */
		/* text-align: ${props => props.collapse ? 'center' : 'left'}; */
	}

	${LinkText} {
		display: ${props => props.collapse ? 'none' : 'block'};
	}

	${Item} {
		a {
			padding: ${props => props.collapse ? '12px' : '9px 15px'};
		}

		${Icon} {
			margin: ${props => props.collapse ? '0 auto' : '0 10px 0 0'};
			font-size: ${props => props.collapse ? '20px' : '16px'};
		}
	}
`;