import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://surybang.github.io',
});

import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://surybang.github.io',
  vite: {
    server: {
      allowedHosts: ['user-fabienhos-684059-0.user.lab.sspcloud.fr'],
    },
  },
});