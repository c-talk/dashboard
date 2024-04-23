import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';
import { t } from '@/hooks/web/useI18n';

const resources: AppRouteModule = {
  path: '/resources',
  name: 'Resources',
  component: LAYOUT,
  redirect: '/resources/index',
  meta: {
    orderNo: 10,
    icon: 'ion:documents-outline',
    title: t('routes.dashboard.resources'),
    hideChildrenInMenu: true,
  },
  children: [
    {
      path: 'index',
      name: 'ResourcesPage',
      component: () => import('@/views/management/resources/index.vue'),
      meta: {
        title: t('routes.dashboard.resources'),
      },
    },
  ],
};

export default resources;
