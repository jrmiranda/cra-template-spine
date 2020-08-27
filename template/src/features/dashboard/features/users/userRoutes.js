import Dashboard from 'features/dashboard/template'
import UserListPage from './pages/UserListPage'
import UserAddPage from './pages/UserAddPage'
import UserEditPage from './pages/UserEditPage'

export default [
	{
		path: '/admin',
		component: UserListPage,
		template: Dashboard,
		exact: true
	},
	{
		path: '/admin/users',
		component: UserListPage,
		template: Dashboard,
		exact: true
	},
	{
		path: '/admin/users/add',
		component: UserAddPage,
		template: Dashboard,
		exact: true,
		restrict: 'private'
	},
	{
		path: '/admin/users/edit',
		component: UserEditPage,
		template: Dashboard,
		exact: true
	},
]