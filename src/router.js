import Home from './pages/Home.vue'
import About from './pages/About.vue'

const routes = [
    { path: '/', component: Home, name: 'Home Page' },
    { path: '/about', component: About, name: 'About Page' }
];

const Router = { routes: routes };

export default Router;