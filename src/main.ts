import App from './App.vue';
import { createSSRApp } from 'vue';
import { createRouter } from './router';

export async function createApp() {
  const app = createSSRApp(App);
  const router = createRouter();
  app.use(router);

  router.afterEach(to => {
    console.log('Current route:', JSON.stringify(to.fullPath))
  })

  return { app, router };
}
