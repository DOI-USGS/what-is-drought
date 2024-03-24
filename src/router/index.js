import { createRouter, createWebHistory } from 'vue-router'
import Visualization from '../views/Visualization.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'VisualizationContent',
      component: Visualization
    },
    {
      path: '/index.html',
      name: 'Index',
      component: Visualization
    }
  ]
})

export default router
