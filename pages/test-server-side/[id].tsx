import type { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';

const TestServerSide: NextPage = () => {
  const router = useRouter();

  return <div>{router.asPath}</div>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};

export default TestServerSide;
