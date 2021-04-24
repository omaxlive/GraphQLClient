import { FC } from 'react';
import { Layout } from '../layout/layout';

const Posts: FC = () => {
  return (
    <div>
      <Layout>
        <h1 className="text-2xl text-gray-800 font-light">Posts</h1>
      </Layout>
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default Posts;
