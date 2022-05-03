import { createMemoryHistory, createRouter as _createRouter, createWebHistory } from 'vue-router'

export function createRouter() {
  return _createRouter({
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes: [
      {
        path: '/:test(.*)*',
        name: 'test',
        component: () => import('./pages/Home.vue')
      }
    ]
  });
}
