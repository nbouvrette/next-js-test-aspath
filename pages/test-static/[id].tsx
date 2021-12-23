import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';

const TestStatic: NextPage = () => {
  const router = useRouter();

  return <div>{router.asPath}</div>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          id: '123', // This is the default `id` of the test page.
        },
      },
    ],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};

export default TestStatic;
