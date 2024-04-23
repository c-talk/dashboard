import { BasicPageParams, PageResult } from '@/api/model/baseModel';

export type GetGroupsParams = Partial<BasicPageParams>;

export type Group = {
  id: string;
  createTime: string;
  updateTime: string;
  name: string;
  code: string;
  head_pic: string;
  owner: string;
  member_list: string[]; // member list
};

export type GetGroupsModel = PageResult<Group>;
