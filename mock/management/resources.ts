import { Resource, ResourceType } from '@/api/management/models/resourcesModel';
import { ApiResponse, PageResult } from '@/api/model/baseModel';
import { type MockMethod } from 'vite-plugin-mock';

export default [
  {
    url: '/basic-api/management/resources',
    method: 'get',
    response: () => {
      return {
        code: 0,
        result: {
          items: [
            {
              id: '1',
              name: '测试',
              mime: 'image/png',
              resource_type: ResourceType.Image,
              created_at: '2024-04-23 18:00:00',
              updated_at: '2024-04-23 18:00:00',
            },
            {
              id: '2',
              name: '歪比八不',
              mime: 'image/png',
              resource_type: ResourceType.Image,
              created_at: '2024-04-23 18:00:00',
              updated_at: '2024-04-23 18:00:00',
            },
          ],
          total: 2,
          page: 1,
          pageSize: 10,
        },
        message: 'success',
        ts: Date.now(),
      } as ApiResponse<PageResult<Resource>>;
    },
  },
] as MockMethod[];
