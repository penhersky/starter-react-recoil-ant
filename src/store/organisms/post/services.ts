import { AxiosResponse } from 'axios';

import { axiosInstance } from '@store/instances/axiosInstance';
import { POSTS_API_URL } from './constants';

const PostServices = {
  getAllPosts: (): Promise<AxiosResponse<[]>> => axiosInstance.get(POSTS_API_URL),
};

export default PostServices;
