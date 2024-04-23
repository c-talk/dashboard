import { BasicPageParams, PageResult } from '@/api/model/baseModel';

export type GetResourcesParams = Partial<BasicPageParams>;

export enum ResourceType {
  Image,
  Voice,
  File,
}

export type Resource = {
  id: string;
  created_at: string;
  updated_at: string;
  resource_type: ResourceType;
  mime: string;
  name: string;
};

export type GetResourcesModel = PageResult<Resource>;
