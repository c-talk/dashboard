import { defHttp } from '@/utils/http/axios';
import { GetUsersParams, GetUsersModel } from './models/userModel';

enum Api {
  USERS_LIST = '/management/users',
}

export const usersListApi = (params?: GetUsersParams) =>
  defHttp.get<GetUsersModel>({
    url: Api.USERS_LIST,
    params,
  });
