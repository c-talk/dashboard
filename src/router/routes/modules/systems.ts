import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';
import { t } from '@/hooks/web/useI18n';

const accounts: AppRouteModule = {
  path: '/systems',
  name: 'Systems',
  component: LAYOUT,
  redirect: '/systems/index',
  meta: {
    orderNo: 10,
    icon: 'ion:settings-outline',
    title: t('routes.dashboard.systems'),
  },
  children: [
    {
      path: 'index',
      name: 'SystemAccountsPage',
      component: () => import('@/views/management/systems/accounts.vue'),
      meta: {
        title: t('routes.dashboard.accounts'),
      },
    },
  ],
};

export default accounts;
