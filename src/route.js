import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: "/Menu",
        name: "MenuPage",
        component: function(){
          return import('./components/MenuPage.vue')
        },
        props: true
    },
    {
        path: "/Makanan",
        name: "MakananPage",
        component: function(){
          return import('./components/MakananPage.vue')
        },
        props: true
    },
    {
        path: "/Minuman",
        name: "MinumanPage",
        component: function(){
          return import('./components/MinumanPage.vue')
        },
        props: true
    },
    {
        path: "/Snack",
        name: "Snack",
        component: function(){
          return import('./components/SnackPage.vue')
        },
        props: true
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router