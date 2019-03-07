import Vue from 'vue'
import Router from 'vue-router'

//一级路由
import Home from '@/components/Home';

import About from '@/components/About';
import Admin from '@/components/Admin';
import Login from '@/components/Login';
import Menu from '@/components/Menu';
import Register from '@/components/Register';

//二级路由
import Activity from '@/components/about/Activity';
import Contact from '@/components/about/Contact';
import Delievry from '@/components/about/Delievry';
import History from '@/components/about/History';

//三级路由
import Address from '@/components/about/contact/Address';
import Person from '@/components/about/contact/Person';
import Tel from '@/components/about/contact/Tel';

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },


        {
            path: '/about',
            name: 'About',
            component: About,
            //设置默认跳转项
            redirect: '/contact',
            children: [ //二级路由
                {
                    path: '/contact',
                    name: 'Contact',
                    component: Contact,

                    redirect: '/address', //默认跳转address
                    children: [{ //三级路由
                        path: '/address',
                        name: 'Address',
                        component: Address
                    }, {
                        path: '/person',
                        name: 'Person',
                        component: Person
                    }, {
                        path: '/tel',
                        name: 'Tel',
                        component: Tel
                    }]
                },


                {
                    path: '/activity',
                    name: 'Activity',
                    component: Activity
                },


                {
                    path: '/delievry',
                    name: 'Delievry',
                    component: Delievry
                },


                {
                    path: '/history',
                    name: 'History',
                    component: History
                }
            ]
        },
        {
            path: '/admin',
            name: 'Admin',
            component: Admin
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/menu',
            name: 'Menu',
            component: Menu
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
    ],
    //取消默认的#号
    mode: 'history'
})