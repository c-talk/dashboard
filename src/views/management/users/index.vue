<script lang="ts" setup>
  import { BasicTable, useTable } from '@/components/Table';
  import { getBasicColumns } from './tabaleData';
  import { PageWrapper } from '@/components/Page';

  import { usersListApi } from '@/api/management/users';

  const [registerTable, { reload }] = useTable({
    title: '用户管理',
    api: usersListApi,
    afterFetch: (...data) => {
      console.log('afterFetch', data);
    },
    fetchSetting: {
      // pageField: 'data.page',
      // sizeField: 'data.pageSize',
      // listField: 'data.items',
      // totalField: 'data.total',
    },
    columns: getBasicColumns(),
    pagination: { pageSize: 10 },
  });
  function handleReloadCurrent() {
    reload();
  }

  function handleReload() {
    reload({ page: 1 });
  }
</script>

<template>
  <PageWrapper contentBackground contentClass="flex" dense contentFullHeight fixedHeight>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleReloadCurrent"> 刷新当前页 </a-button>
        <a-button type="primary" @click="handleReload"> 刷新并返回第一页 </a-button>
      </template>
    </BasicTable>
  </PageWrapper>
</template>
