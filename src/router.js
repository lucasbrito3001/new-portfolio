import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Portfolio from './pages/Portfolio.vue'
import Contact from './pages/Contact.vue'

const routes = [
    { path: '/', component: Home, name: 'Home Page' },
    { path: '/about', component: About, name: 'About Page' },
    { path: '/portfolio', component: Portfolio, name: 'Portfolio Page' },
    { path: '/contact', component: Contact, name: 'Contact Page' }
];

const Router = { routes: routes };

export default Router;