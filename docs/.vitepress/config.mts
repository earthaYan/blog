import { defineConfig } from 'vitepress';
import { generateHeaderNav } from './config.data';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 站点配置
  title: '📝烂笔头',
  titleTemplate: true,
  description: 'Blog powered by vitepress 1.x',
  head: [['link', { rel: 'icon', href: '/blog/favicon.ico' }]],
  base: '/blog/',
  lang: 'zh-Hans',
  lastUpdated: true,
  // 主题配置
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: generateHeaderNav(),
    socialLinks: [{ icon: 'github', link: 'https://github.com/earthaYan' }],
  },
});
