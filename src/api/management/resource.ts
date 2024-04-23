import { defHttp } from '@/utils/http/axios';
import { GetResourcesModel, GetResourcesParams } from './models/resourcesModel';

enum Api {
  RESOURCES_LIST = '/management/resources',
}

export const resourcesListApi = (params?: GetResourcesParams) =>
  defHttp.get<GetResourcesModel>({
    url: Api.RESOURCES_LIST,
    params,
  });
