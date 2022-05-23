import type {
  GetStaticPaths,
  GetStaticPathsContext,
  GetStaticProps,
  NextPage,
} from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

const TestStatic: NextPage = () => {
  const router = useRouter();
  return (
    <div>
      <div>
        <Link href="/">Go back</Link>
      </div>
      <br></br>
      <div>Router `asPath` value: {router.asPath}</div>
      <br></br>
      <div>
        ⚠️ Open your browser&apos;s console log to see the mismatch error.
      </div>
      <div>
        ⚠️ Use your browser&apos;s `view page source`to see the SSR mismatch
        with the client side value.
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async (
  context: GetStaticPathsContext
) => {
  return {
    paths: [
      {
        params: {
          id: '123', // This is the default `id` of the test page.
        },
        locale: 'fr',
      },
    ],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};

export default TestStatic;
