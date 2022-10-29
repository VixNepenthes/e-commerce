import Home from '../page/Home';
import Login from '../page/Login';
import Product from '../page/Product';
import ProductList from '../page/ProductList';
import Register from '../page/Register';
import Cart from '../page/Cart';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/category', component: ProductList },
    { path: '/product', component: Product },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/cart', component: Cart },
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };
