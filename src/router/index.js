import { createRouter, createWebHistory } from "vue-router";

import store from "@/stores";
import axios from "axios";

import { useDiagram } from "../stores/data.js";

import HomeView from "../views/HomeView.vue";
import { ip } from "../ip_config";
import Header from "../views/template/HeaderView.vue";
import Sidebar from "../views/template/SidebarView.vue";
import Footer from "../views/template/FooterView.vue";
import { ref, reactive, computed, watch, onMounted } from "vue";

const routes = [
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/",
    name: "blank",
    beforeEnter: async (to, from, next) => {
      const $store = useDiagram();
    //   $store.setDataDiagram(res.data.data)
    //    let dataDiagram = reactive([]);
      if (localStorage.getItem("user_token")) {
        try {
          let res = await axios.get(ip + "/grafik", {
            headers: {
              Authorization: localStorage.getItem("user_token"),
            },
          });
          if (res.data.error_code === 0) {
            $store.setDataDiagram(res.data.data);
          }
        } catch (error) {
          console.log(error);
        }

        next();
      } else {
        next("/login");
      }
    },
    components: {
      Header,
      Sidebar,
      Footer,
      default: () => import("../views/BlankView.vue"),
    },
  },
  {
    path: "/login",
    name: "login",
    components: {
      default: () => import("../views/LoginView.vue"),
    },
  },
  {
    path: "/responden",
    name: "responden",
    components: {
      Header,
      Sidebar,
      Footer,
      default: () => import("../views/RespondenView.vue"),
    },
  },
  {
    path: "/editresponden/:id",
    name: "editresponden",
    components: {
      Header,
      Sidebar,
      Footer,
      default: () => import("../views/EditRespondenView.vue"),
    },
  },
  {
    path: "/addresponden",
    name: "addresponden",
    components: {
      Header,
      Sidebar,
      Footer,
      default: () => import("../views/AddRespondenView.vue"),
    },
  },
  {
    path: "/kuesioner",
    name: "kuesioner",
    components: {
      Header,
      Sidebar,
      Footer,
      default: () => import("../views/KuesionerView.vue"),
    },
  },
  {
    path: "/tabelkuesioner/:id",
    name: "tabelkuesioner",
    components: {
      Header,
      Sidebar,
      Footer,
      default: () => import("../views/TabelKuesionerView.vue"),
    },
  },
  {
    path: "/tabelpelaporan/:id",
    name: "tabelpelaporan",
    components: {
      Header,
      Sidebar,
      Footer,
      default: () => import("../views/TabelPelaporanView.vue"),
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    components: {
      default: () => import("../views/404View.vue"),
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// router.beforeEach(async (to,from,next)=>{
//     const token = localStorage.getItem("user_token")
//     if(to.name === 'login'){
//         next()
//     } else {
//         if(!token){
            
//             next({name : 'login'})
//         } else {
           
//             var response = await axios.post(ip+'/verify',{ token })
//             if(response.data){
//                 next()
//             } else {
//               localStorage.clear();
//               next({name : 'login'})
//             }
//         }
//     }
// })

export default router;
