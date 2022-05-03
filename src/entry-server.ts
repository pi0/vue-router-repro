import { createApp } from './main';
import { renderToString } from 'vue/server-renderer';

export async function render(url) {
  const { app, router } = await createApp();

  await router.push(url);

  await router.replace({ ...router.resolve(url), force: true })

  const ctx = {};
  const html = await renderToString(app, ctx);
  return { html };
}
