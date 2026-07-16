import { createRouter, createWebHistory } from 'vue-router'
import gamingView from '../views/gamingView.vue'
import HomeView from '../views/homeIndex.vue'
import legendsView from '../views/legendPage.vue'
import projectView from '../views/projectView.vue'
import socialPage from '@/views/socialPage.vue'
import splatoonPage from '@/views/splatoonPage.vue'
import updatesPage from '@/views/updatesPage.vue'

import BusList from '../views/transport/bus-list.vue'
import bus2024 from '@/views/transport/sort-date/bus-2024.vue'

import alamedaBus from '@/views/transport/sort-region/NCA/alamedaBus.vue'
import farNorth from '@/views/transport/sort-region/NCA/farNorth.vue'
import modestoArea from '@/views/transport/sort-region/NCA/modestoArea.vue'
import napaArea from '@/views/transport/sort-region/NCA/napaArea.vue'
import sacramentoArea from '@/views/transport/sort-region/NCA/sacramentoArea.vue'
import SFPeninsula from '@/views/transport/sort-region/NCA/SFPeninsula.vue'
import sonomaMarin from '@/views/transport/sort-region/NCA/sonomaMarin.vue'

import centralCoast from '@/views/transport/sort-region/SCA/centralCoast.vue'
import fresnoArea from '@/views/transport/sort-region/SCA/fresnoArea.vue'
import kernArea from '@/views/transport/sort-region/SCA/kernArea.vue'
import LAInner from '@/views/transport/sort-region/SCA/LAInner.vue'
import LAOuter from '@/views/transport/sort-region/SCA/LAOuter.vue'

import busMisc from '@/views/transport/sort-region/bus-misc.vue'
import busNCA from '@/views/transport/sort-region/bus-NCA.vue'
import busSCA from '@/views/transport/sort-region/bus-SCA.vue'
import trainCA from '@/views/transport/sort-region/train-CA.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/gamingView',
      name: 'gaming',
      component: () => import('../views/gamingView.vue')
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/legendsPage',
      name: 'legends',
      component: () => import('../views/legendPage.vue')
    },
    {
      path: '/projectView',
      name: 'projects',
      component: () => import('../views/projectView.vue')
    },
    {
      path: '/socialPage',
      name: 'socials',
      component: () => import('../views/socialPage.vue')
    },
    {
      path: '/splatoonPage',
      name: 'splatoon',
      component: () => import('../views/splatoonPage.vue')
    },
    {
      path: '/updatesPage',
      name: 'updates',
      component: () => import('../views/updatesPage.vue')
    },

    {
      path: '/transport/bus-list',
      name: 'bus-list',
      component: () => import('../views/transport/bus-list.vue')
    },
    {
      path: '/transport/sort-date/bus-2024',
      name: 'bus-2024',
      component: () => import('../views/transport/sort-date/bus-2024.vue')
    },

    {
      path: '/transport/sort-region/NCA/alamedaBus',
      name: 'AlamedaBus',
      component: () => import('../views/transport/sort-region/NCA/alamedaBus.vue')
    },
    {
      path: '/transport/sort-region/NCA/farNorth',
      name: 'farNorth',
      component: () => import('../views/transport/sort-region/NCA/farNorth.vue')
    },
    {
      path: '/transport/sort-region/NCA/modestoArea',
      name: 'ModestoArea',
      component: () => import('../views/transport/sort-region/NCA/modestoArea.vue')
    },
    {
      path: '/transport/sort-region/NCA/napaArea',
      name: 'NapaArea',
      component: () => import('../views/transport/sort-region/NCA/napaArea.vue')
    },
    {
      path: '/transport/sort-region/NCA/sacramentoArea',
      name: 'SacramentoArea',
      component: () => import('../views/transport/sort-region/NCA/sacramentoArea.vue')
    },
    {
      path: '/transport/sort-region/NCA/SFPeninsula',
      name: 'SFPeninsula',
      component: () => import('../views/transport/sort-region/NCA/SFPeninsula.vue')
    },
    {
      path: '/transport/sort-region/NCA/sonomaMarin',
      name: 'SonomaMarin',
      component: () => import('../views/transport/sort-region/NCA/sonomaMarin.vue')
    },

    {
      path: '/transport/sort-region/SCA/centralCoast',
      name: 'CentralCoast',
      component: () => import('../views/transport/sort-region/SCA/centralCoast.vue')
    },
    {
      path: '/transport/sort-region/SCA/fresnoArea',
      name: 'FresnoArea',
      component: () => import('../views/transport/sort-region/SCA/fresnoArea.vue')
    },
    {
      path: '/transport/sort-region/SCA/kernArea',
      name: 'KernArea',
      component: () => import('../views/transport/sort-region/SCA/kernArea.vue')
    },
    {
      path: '/transport/sort-region/SCA/LAInner',
      name: 'LAInner',
      component: () => import('../views/transport/sort-region/SCA/LAInner.vue')
    },
    {
      path: '/transport/sort-region/SCA/LAOuter',
      name: 'LAOuter',
      component: () => import('../views/transport/sort-region/SCA/LAOuter.vue')
    },

    {
      path: '/transport/sort-region/bus-misc',
      name: 'bus-misc',
      component: () => import('../views/transport/sort-region/bus-misc.vue')
    },
    {
      path: '/transport/sort-region/bus-NCA',
      name: 'bus-NCA',
      component: () => import('../views/transport/sort-region/bus-NCA.vue')
    },
    {
      path: '/transport/sort-region/bus-SCA',
      name: 'bus-SCA',
      component: () => import('../views/transport/sort-region/bus-SCA.vue')
    },
    {
      path: '/transport/sort-region/train-CA',
      name: 'train-CA',
      component: () => import('../views/transport/sort-region/train-CA.vue')
    },
  ],
})

export default router
