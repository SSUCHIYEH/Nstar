import ProductsCategory from '../page/ProductsCategory';
import ProductDetail from "../page/ProductDetail";
import UserCart from "../page/UserCart";
import Home from '../page/Home';
import LogIn from '../page/LogIn';
import UserCheckout from '../page/UserCheckout';
import UserCheckoutSuccess from '../page/UserCheckoutSuccess';

const routes = [
    {
        path:'/',
        component: Home,
        exact: true,
    },
    {
        path:'/product/category/:category',
        component: ProductsCategory,
        exact: true,
    },
    {
        path:'/product/detail/:category/:id',
        component: ProductDetail,
        exact: true,

    },
    {
        path:'/usercart',
        component: UserCart,
        exact: true,
    },
    {
        path:'/usercart/usercheckout',
        component: UserCheckout,
        exact: true,
    },
    {
        path:'/usercart/usercheckoutsuccess',
        component: UserCheckoutSuccess,
        exact: true,
    },
    {
        path:'/signup',
        component: LogIn,
        exact: true,
    },
    {
        path:'/login',
        component: LogIn,
        exact: true,
    },
]

export{routes}

// {
//     path:'/product/personal/:id',
//     component:
// },
