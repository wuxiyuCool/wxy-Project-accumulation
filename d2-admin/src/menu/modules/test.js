export default {
    path: '/test',
    title: '权限测试',
    iconSvg: 'd2-crud',
    children: (pre => [
      {
        title: 'test1',
        children: [
          { path: `${pre}admin`, title: 'admin ', icon: 'home', meta: { root: 'admin' }},
          { path: `${pre}editor`, title: 'editor', meta: { root: 'editor' }},
          { path: `${pre}demo1`, title: 'tesa2' },
        ]
      },
    ])('/test/')
  }
  