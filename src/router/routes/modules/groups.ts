import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';
import { t } from '@/hooks/web/useI18n';

const users: AppRouteModule = {
  path: '/groups',
  name: 'Users',
  component: LAYOUT,
  redirect: '/groups/index',
  meta: {
    orderNo: 10,
    icon: 'ion:chatbubbles-outline',
    title: t('routes.dashboard.groups'),
  },
  children: [
    {
      path: 'index',
      name: 'GroupsPage',
      component: () => import('@/views/management/users/index.vue'),
      meta: {
        title: t('routes.dashboard.groups'),
      },
    },
  ],
};

export default users;
