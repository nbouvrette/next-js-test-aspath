import type { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

const TestServerSide: NextPage = () => {
  const router = useRouter();

  return (
    <div>
      <div>
        <Link href="/">Go back</Link>
      </div>
      <br></br>
      <div>{router.asPath}</div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} }; // Empty properties, since we are only using this to get the query parameters.
};

export default TestServerSide;
