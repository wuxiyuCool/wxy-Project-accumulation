/* eslint-disable */
import layoutHeaderAside from '@/layout/header-aside'
// auth为是否进行登录验证的
const meta = {
    auth: true
}
export default {
    path: '/test',
    name: 'test',
    meta,
    component: layoutHeaderAside,
    children: (pre => [{
            path: 'admin',
            name: `${pre}admin`,
            component: () => import('@/pages/matter/newmatter'),
            meta: {
                root: 'admin',
                title: 'admin'
            }
        },
        {
            path: 'editor',
            name: `${pre}editor`,
            component: () => import('@/pages/matter/metting'),
            meta: { ...meta,
                root: 'editor',
                title: 'editor'
            }
        },
        {
            path: 'demo1',
            name: `${pre}demo1`,
            component: () => import('@/pages/demo/charts/index'),
            meta: { ...meta,
                title: 'test-demo1'
            }
        }
    ])('test-')
}