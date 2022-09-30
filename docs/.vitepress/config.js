/*
 * @Author: 朽木白
 * @Date: 2022-09-03 01:09:44
 * @LastEditors: xxx@xxx.com
 * @LastEditTime: 2022-09-30 14:03:28
 * @Description:
 */


module.exports = {
  title: 'vivace-util',
  description: 'frontend docs',
  lastUpdated: true,
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
    ],
  ],
  themeConfig: {
    siteTitle: 'Vivace Tool',
    logo: '/logo.png',
    laslltUpdatedText: '最后更新',
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/xiumubai',
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present xiumubai',
    },
    sidebar: {
      '/': [
        {
          text: '函数集合',
          items: [
            {
              text: "sum", link: '/utils/sum'
            }
          ]
        }
      ]
    },
  },
};
