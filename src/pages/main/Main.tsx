import { FC } from 'react';
import { Card, Typography, Spin } from 'antd';

import { usePosts } from '@store/organisms/post';

const Main: FC = () => {
  const { data, isLoading } = usePosts();

  return (
    <div>
      <Typography.Title>Posts</Typography.Title>

      {isLoading ? <Spin size='large' /> : null}

      {data
        ? data?.map((post: any) => (
            <Card title={post.title} key={post.id} bordered={false}>
              <p>Views {post.views}</p>
            </Card>
          ))
        : null}
    </div>
  );
};

export default Main;
