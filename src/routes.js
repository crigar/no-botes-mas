import Home from './components/home/home.vue';
import Register from './components/register/register.vue';
import Login from './components/login/login.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
];

export default routes;
