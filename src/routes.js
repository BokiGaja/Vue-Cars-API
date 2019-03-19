import VueRouter from 'vue-router';
import AppCars from './components/AppCars';
import AddCar from './components/AddCar'

const routes = [
    { path: '/cars', name: 'cars', component: AppCars},
    { path: '/add', name: 'addCar', component: AddCar},
    { path: '/carAdded', redirect: {name: 'cars'}},
    { path: '/edit/:id', name: 'edit', component: AddCar}
];

export const router = new VueRouter({
    mode: 'history',
    routes
});