import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'

export default [
	{ path: '/register',	component: RegisterPage,	exact: true	},
	{ path: '/login', 		component: LoginPage,			exact: true }
]