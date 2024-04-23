import { defHttp } from '@/utils/http/axios';
import { GetGroupsModel, GetGroupsParams } from './models/groupModel';

enum Api {
  GROUPS_LIST = '/management/groups',
}

export const groupsListApi = (params?: GetGroupsParams) =>
  defHttp.get<GetGroupsModel>({
    url: Api.GROUPS_LIST,
    params,
  });
