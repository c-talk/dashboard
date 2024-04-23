import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';
import { t } from '@/hooks/web/useI18n';

const users: AppRouteModule = {
  path: '/users',
  name: 'Users',
  component: LAYOUT,
  redirect: '/users/index',
  meta: {
    orderNo: 10,
    icon: 'ion:people-outline',
    title: t('routes.dashboard.users'),
  },
  children: [
    {
      path: 'index',
      name: 'UsersPage',
      component: () => import('@/views/management/users/index.vue'),
      meta: {
        title: t('routes.dashboard.users'),
      },
    },
  ],
};

export default users;
