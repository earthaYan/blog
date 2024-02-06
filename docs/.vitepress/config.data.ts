import { DefaultTheme } from 'vitepress';

export function generateHeaderNav(): DefaultTheme.NavItem[] {
  return [
    {
      text: '工作复盘',
      items: [
        { text: '缺陷修复', link: '/work/issues/' },
        { text: '新增需求', link: '/work/task/' },
      ],
    },
    {
      text: '前端',
      items: [
        { text: 'Vue', link: '/frontend/vue/' },
        { text: 'React', link: '/frontend/react/' },
        {
          text: '性能优化',
          link: '/frontend/performance/',
        },
      ],
    },
    { text: '后端', items: [{ text: 'Go', link: '/backend/golang/' }] },
    {
      text: '🖥️',
      items: [{ text: '计算机组成原理', link: '/base/organization/' }],
    },
    {
      text: '🧰',
      link: '/tool/',
    },
  ];
}
