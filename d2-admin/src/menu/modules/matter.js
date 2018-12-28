export default {
    path: '/matter',
    title: '事项',
    iconSvg: 'd2-crud',
    children: (pre => [
      { path: `${pre}newmatter`, title: '新事项 ', icon: 'home' , meta: { root: 'admin' }},
      { path: `${pre}package`, title: '成果包 ', icon: 'home' },
      { path: `${pre}fengon`, title: '分工 ', icon: 'home' },
      { path: `${pre}metting`, title: '会议 ', icon: 'home' }
    ])('/matter/')
  }
  