import Login from '@/pages/Login'

import Dashboard from '@/pages/Dashboard'
import Option1 from '@/pages/Option1'
import Option2 from '@/pages/Option2'
import Option3 from '@/pages/Option3'
const routes = [
    {
        path: '/',
        component: () => import('@/layouts/AuthTemplate'),
        children: [
            {
                path: '/',
                component: Login,
                name: 'login',
                meta: {
                    title: 'Login - Tsuru'
                }
            },
        ]
    },
    {
        path: '/',
        component: () => import('@/layouts/DefaultTemplate'),
        children: [
            {
                path: '/dashboard',
                component: Dashboard,
                name: 'dashboard',
                meta: {
                    title: 'Dashboard - Tsuru'
                }
            },
            {
                path: '/option1',
                component: Option1,
                name: 'option1',
                meta: {
                    title: 'Option1 - Tsuru'
                }
            },
            {
                path: '/option2',
                component: Option2,
                name: 'option2',
                meta: {
                    title: 'Option2 - Tsuru'
                }
            },
            {
                path: '/option3',
                component: Option3,
                name: 'option3',
                meta: {
                    title: 'Option3 - Tsuru'
                }
            },
        ]
    },

]

export default routes