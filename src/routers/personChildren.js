const personChildren = [
    {
        path: 'orderforms', 
        component: () => import('../views/OrderForms.vue') 
    },
    {
        path: 'account', 
        component: () => import('../views/Account.vue') 
    },
    {
        path: 'favourite', 
        component: () => import('../views/Favourite.vue') 
    },
    {
        path: 'orderdetail',
        component: () => import('../views/OrderDetail.vue')
    }
    
]

export default personChildren