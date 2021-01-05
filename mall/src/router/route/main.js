export default [
    {
        path: '/',
        name: '入口',
        redirect: { name : '主页'},
        component: () => import('@/App')
    }
]
