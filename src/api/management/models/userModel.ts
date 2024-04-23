import { BasicPageParams, PageResult } from '@/api/model/baseModel';

export type GetUsersParams = Partial<BasicPageParams>;

export type User = {
  id: string;
  createTime: string;
  updateTime: string;
  nickname: string;
  avatar: string;
  email: string;
  verify: boolean;
};

export type GetUsersModel = PageResult<User>;
