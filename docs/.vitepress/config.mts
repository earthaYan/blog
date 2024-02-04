import { DefaultTheme, defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 站点配置
  title: 'Blog',
  description: 'Blog powered by vitepress 1.x',
  base: '/blog/',
  lang: 'zh-Hans',
  // 主题配置
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    nav: nav(),
    sidebar: {
      '/work': { base: '/work/index', items: sidebarForWork()},
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/earthaYan' }],
  },
});
function nav(): DefaultTheme.NavItem[] {
  return [
    { text: '工作总结', link: '/work/index' },
    { text: '前端', link: '/frontend/index' },
    { text: '后端', link: '/backend/index' },
    { text: '随笔', link: '/life/index' },
  ];
}
function sidebarForWork(): DefaultTheme.SidebarItem[] {
  return [
    {
      text:'缺陷修复',
      collapsed: false,
      items:[]
    },
    {
      text:'新增需求',
      collapsed: false,
    }
  ];
}
