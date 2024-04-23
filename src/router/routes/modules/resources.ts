import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';
import { t } from '@/hooks/web/useI18n';

const users: AppRouteModule = {
  path: '/resources',
  name: 'Users',
  component: LAYOUT,
  redirect: '/groups/index',
  meta: {
    orderNo: 10,
    icon: 'ion:documents-outline',
    title: t('routes.dashboard.resources'),
  },
  children: [
    {
      path: 'index',
      name: 'ResourcesPage',
      component: () => import('@/views/management/users/index.vue'),
      meta: {
        title: t('routes.dashboard.resources'),
      },
    },
  ],
};

export default users;
