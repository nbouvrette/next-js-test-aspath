/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
  },
  rewrites() {
    return [
      {
        source: '/fr/test-cote-serveur/:id',
        destination: '/fr/test-server-side/:id',
        locale: false,
      },
      {
        source: '/fr/test-statique/:id',
        destination: '/fr/test-static/:id',
        locale: false,
      },
    ];
  },
};
