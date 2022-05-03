import { createApp } from './main';

const { app, router } = await createApp();
await router.isReady()
app.mount('#app');
