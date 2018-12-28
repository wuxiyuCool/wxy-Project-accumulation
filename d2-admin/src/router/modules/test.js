/* eslint-disable */
import layoutHeaderAside from '@/layout/header-aside'
// auth为是否需要登陆验证
const meta = {
  auth: true
}


export default {
  path: '/matter',
  name: 'matter',
  meta,
  redirect: {
    name: 'matter-index'
  },
  component: layoutHeaderAside,
  children: (pre => [{
      path: 'newmatter',
      name: `${pre}newmatter`,
      component: () => import('@/pages/matter/newmatter'),
      meta: { ...meta,
        title: '新事项'
      }
    },
    {
      path: 'metting',
      name: `${pre}metting`,
      component: () => import('@/pages/matter/metting'),
      meta: { ...meta,
        title: '会议'
      }
    },
    {
      path: 'package',
      name: `${pre}package`,
      component: () => import('@/pages/matter/package'),
      meta: { ...meta,
        title: '成果包'
      }
    },
    {
      path: 'fengon',
      name: `${pre}fengon`,
      component: () => import('@/pages/matter/fengon'),
      meta: { ...meta,
        title: '分工'
      }
    }
  ])('matter-')
}