// NOTE: rfc
import { FC } from 'react';
import { Layout } from '../layout/layout';

const AboutUs: FC = () => {
  return (
    <div>
      <Layout>
        <h1 className="text-2xl text-gray-800 font-light">About Us</h1>
      </Layout>
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default AboutUs;
