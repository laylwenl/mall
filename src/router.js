import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/Home';
import Index from './pages/Index';
import Product from './pages/Product';
import Detail from './pages/Detail';
import Cart from './pages/Cart';
import Order from './pages/Order';
import OrderConfirm from './pages/OrderConfirm';
import OrderList from './pages/OrderList';
import OrderPay from './pages/OrderPay';
import Alipay from './pages/Alipay'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: 'Home',
            component: Home,
            redirect:'/Index',
            children: [
                {
                    path: "/Index",
                    name: 'Index',
                    component: Index
                }, {
                    path: "/Product/:id",
                    name: 'Product',
                    component: Product
                }, {
                    path: "/Detail/:id",
                    name: 'Detail',
                    component: Detail
                }
            ]
        },
        {
            path: "/Cart",
            name: 'Cart',
            component: Cart
        },
        {
            path: "/Order",
            name: 'Order',
            component: Order,
            children: [
                {
                    path: "/confirm",
                    name: 'order-confirm',
                    component: OrderConfirm
                },
                {
                    path: "/list",
                    name: 'order-List',
                    component: OrderList
                },
                {
                    path: "/pay",
                    name: 'order-pay',
                    component: OrderPay
                },{
                    path: "/alipay",
                    name: 'ali-pay',
                    component: Alipay
                },
            ]
        }
    ]
})