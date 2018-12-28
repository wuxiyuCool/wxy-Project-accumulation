export default {
    path: '/test',
    title: '权限测试',
    iconSvg: 'd2-crud',
    children: (pre => [
      {
        title: 'test1',
        children: [
		// 在menu里面添加root权限来判断是否在menu里面显示入口
          { path: `${pre}admin`, title: 'admin ', icon: 'home', meta: { root: 'admin' }},
          { path: `${pre}editor`, title: 'editor', meta: { root: 'editor' }},
          { path: `${pre}demo1`, title: 'tesa2' },
        ]
      },
    ])('/test/')
  }
  