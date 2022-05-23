import type { NextPage } from 'next';
const Home: NextPage = () => {
  return (
    <div>
      <p>
        ⚠️ Open your browser console before clicking on these links to see the
        log.
      </p>
      <ol>
        <li>
          <a href="/fr/test-cote-serveur/123">Example #1</a> using
          `getServerSideProps` and `asPath`: result is as expected (`asPath` =
          `/test-cote-serveur/123`)
        </li>
        <li>
          <a href="/fr/test-statique/123">Example #2</a> using `getStaticPaths`
          and `asPath`: result is <b>not</b> as expected (`asPath` =
          `/test-static/123`) - the console will also show error message
        </li>
      </ol>

      <br></br>
    </div>
  );
};

export default Home;
