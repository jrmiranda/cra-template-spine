import React from 'react'
import { Wrapper, Separator, MenuLink } from './MenuStyles'
import { faUser, faNewspaper, faUsers, faComments, faCog } from '@fortawesome/free-solid-svg-icons'
import { useCollapse } from '../../CollapseContext'

const Menu = () => {
	const { collapse } = useCollapse()

	return (
		<Wrapper collapse={collapse}>
			<Separator>{collapse ? 'DB' : 'Dashboard'}</Separator>
			<MenuLink icon={faUser} to="/admin/users/" exact="true">Perfil</MenuLink>
			<MenuLink icon={faNewspaper} to="/admin/users/add" exact="true">Posts</MenuLink>
			<MenuLink icon={faUsers} to="/admin/users/edit" exact="true">Usuários</MenuLink>
			<MenuLink icon={faComments} to="/admin/users/" exact="true">Comentários</MenuLink>
			<MenuLink icon={faCog} to="/admin/users/" exact="true">Configurações</MenuLink>
		</Wrapper>
	);
}

export default Menu