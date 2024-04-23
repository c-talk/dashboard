import { Group } from '@/api/management/models/groupModel';
import { ApiResponse, PageResult } from '@/api/model/baseModel';
import { type MockMethod } from 'vite-plugin-mock';

export default [
  {
    url: '/basic-api/management/groups',
    method: 'get',
    response: () => {
      return {
        code: 0,
        result: {
          items: [
            {
              id: '1',
              name: '测试',
              head_pic: '',
              code: '123213',
              owner: '123',
              member_list: ['231'],
              createTime: '2024-04-23 18:00:00',
              updateTime: '2024-04-23 18:00:00',
            },
            {
              id: '2',
              name: '歪比八不',
              head_pic: '',
              code: '123213',
              owner: '123',
              member_list: ['231'],
              createTime: '2024-04-23 18:00:00',
              updateTime: '2024-04-23 18:00:00',
            },
          ],
          total: 2,
          page: 1,
          pageSize: 10,
        },
        message: 'success',
        ts: Date.now(),
      } as ApiResponse<PageResult<Group>>;
    },
  },
] as MockMethod[];
