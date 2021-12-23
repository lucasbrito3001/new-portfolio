import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Portfolio from './pages/Portfolio.vue'

const routes = [
    { path: '/', component: Home, name: 'Home Page' },
    { path: '/about', component: About, name: 'About Page' },
    { path: '/portfolio', component: Portfolio, name: 'Portfolio Page' }
];

const Router = { routes: routes };

export default Router;