import { atom } from 'recoil';

import { POSTS_ATOM_KEY } from './constants';

const PostsState = atom({
  key: POSTS_ATOM_KEY,
  default: [],
});

export default PostsState;
