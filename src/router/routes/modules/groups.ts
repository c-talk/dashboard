import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';
import { t } from '@/hooks/web/useI18n';

const groups: AppRouteModule = {
  path: '/groups',
  name: 'Groups',
  component: LAYOUT,
  redirect: '/groups/index',
  meta: {
    orderNo: 10,
    icon: 'ion:chatbubbles-outline',
    title: t('routes.dashboard.groups'),
    hideChildrenInMenu: true,
  },
  children: [
    {
      path: 'index',
      name: 'GroupsPage',
      component: () => import('@/views/management/groups/index.vue'),
      meta: {
        title: t('routes.dashboard.groups'),
      },
    },
  ],
};

export default groups;
