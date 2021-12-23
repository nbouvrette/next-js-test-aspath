import type { NextPage } from 'next';
const Home: NextPage = () => {
  return (
    <div>
      <a href="/fr/test-cote-serveur/123">
        Server side test, should show: /fr/test-cote-serveur/123
      </a>
      <br></br>
      <a href="/fr/test-statique/123">
        Static test, should show: /fr/test-statique/123
      </a>
    </div>
  );
};

export default Home;
