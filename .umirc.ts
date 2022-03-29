import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  theme: {
    'primary-color': '#032b64',
  },
  history: {
    type: 'hash',
  },
  fastRefresh: {},
  locale: { default: 'en-US', antd: true },
});
