import ProductsCategory from '../page/ProductsCategory';
import ProductDetail from "../page/ProductDetail";
import UserCart from "../page/UserCart";
import Home from '../page/Home';

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
]

export{routes}

// {
//     path:'/product/personal/:id',
//     component:
// },
