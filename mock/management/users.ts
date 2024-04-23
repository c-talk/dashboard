import { User } from '@/api/management/models/userModel';
import { ApiResponse, PageResult } from '@/api/model/baseModel';
import { type MockMethod } from 'vite-plugin-mock';

export default [
  {
    url: '/basic-api/management/users',
    method: 'get',
    response: () => {
      return {
        code: 0,
        result: {
          items: [
            {
              id: 1,
              nickname: 'vben',
              avatar: '',
              email: '',
              verify: true,
              createTime: '2024-04-23 18:00:00',
              updateTime: '2024-04-23 18:00:00',
            },
            {
              id: 2,
              nickname: 'test',
              avatar: '',
              email: '',
              verify: false,
              createTime: '2024-04-23 18:01:00',
              updateTime: '2024-04-23 18:01:00',
            },
          ],
          total: 2,
          page: 1,
          pageSize: 10,
        },
        message: 'success',
        ts: Date.now(),
      } as ApiResponse<PageResult<User>>;
    },
  },
] as MockMethod[];
