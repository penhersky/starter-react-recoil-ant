import { useSetRecoilState } from 'recoil';
import { useQuery } from '@tanstack/react-query';

import PostsState from './atom';
import PostServices from './services';
import { POSTS_LOAD_POST_KEY } from './constants';

export function usePosts() {
  const setPosts = useSetRecoilState(PostsState);

  return useQuery({
    queryKey: [POSTS_LOAD_POST_KEY],

    queryFn: async () => {
      const res = await PostServices.getAllPosts();

      const posts = res.data;

      setPosts(posts);

      return posts;
    },
  });
}
