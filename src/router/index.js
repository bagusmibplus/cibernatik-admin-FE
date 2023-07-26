import { createRouter, createWebHistory } from 'vue-router'

import store from '@/stores'
import axios from 'axios'

import HomeView from '../views/HomeView.vue'

import Header from '../views/template/HeaderView.vue'
import Sidebar from '../views/template/SidebarView.vue'
import Footer from '../views/template/FooterView.vue'

const routes = [
    {
        path: '/home',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
    },
    {
        path: '/',
        name: 'blank',
        beforeEnter : (to, from, next) => {
            if(localStorage.getItem("user_token")){
                next()
            } else{
                next("/login")
            }
        },
        components: {
            Header,
            Sidebar,
            Footer,
            default : () => import('../views/BlankView.vue')
        }
    },
    {
        path: '/login',
        name: 'login',
        components: {
            default : () => import('../views/LoginView.vue')
        }
    },
    {
        path: '/responden',
        name: 'responden',
        components: {
            Header,
            Sidebar,
            Footer,
            default: () => import('../views/RespondenView.vue')
        } 
    },
    {
        path: '/editresponden/:id',
        name: 'editresponden',
        components: {
            Header,
            Sidebar,
            Footer,
            default: () => import('../views/EditRespondenView.vue')
        } 
    },
    {
        path: '/addresponden',
        name: 'addresponden',
        components: {
            Header,
            Sidebar,
            Footer,
            default: () => import('../views/AddRespondenView.vue')
        } 
    },
    {
        path: '/kuesioner',
        name: 'kuesioner',
        components: {
            Header,
            Sidebar,
            Footer,
            default: () => import('../views/KuesionerView.vue')
        } 
    },
    {
        path: '/tabelkuesioner/:id',
        name: 'tabelkuesioner',
        components: {
            Header,
            Sidebar,
            Footer,
            default: () => import('../views/TabelKuesionerView.vue')
        } 
    },
    {
        path: '/tabelpelaporan/:id',
        name: 'tabelpelaporan',
        components: {
            Header,
            Sidebar,
            Footer,
            default: () => import('../views/TabelPelaporanView.vue')
        } 
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        components: {
            default : () => import('../views/404View.vue')
        }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

// router.beforeEach(async (to,from,next)=>{
//     const token = store.getters.getToken
//     if(to.name === 'login'){
//         next()
//     } else {
//         if(!token){
//             next()
//             // next({name : 'login'})
//         } else {
//             next()
//             // var response = await axios.post(store.getters.getServerURL+'/validate',{ token })
//             // if(response.data){
//             //     next()
//             // } else {
//             //     window.localStorage.removeItem('vuex');
//             //     next({name : 'login'})
//             // }
//         }
//     }
// })

export default router
