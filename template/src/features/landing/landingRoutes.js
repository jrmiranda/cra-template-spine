import Landing from 'features/landing/template'
import HomePage from './pages/HomePage'
import PricingPage from './pages/PricingPage'
import AboutPage from './pages/AboutPage'

export default [
	{ path: '/', component: HomePage, template: Landing, exact: true },
	{ path: '/pricing', component: PricingPage, template: Landing, exact: true },
	{ path: '/about', component: AboutPage, template: Landing, exact: true },
]