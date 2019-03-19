import VueRouter from 'vue-router';
import AppCars from './components/AppCars'

const routes = [
    { path: '/cars', name: 'cars', component: AppCars}
];

export const router = new VueRouter({
    mode: 'history',
    routes
});