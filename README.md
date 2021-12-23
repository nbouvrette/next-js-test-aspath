## How to reproduce

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Inspect your page, and make sure to open the `console` tab in your browser to see logs.

### Happy path

If you click on the first link.

Both SRR and client side `asPath` matches when using `getServerSideProps` - no error is shown in the logs.

### Issue with `asPath`

If you return back, and click on the second link you should see the following error in your console:

```console
next-dev.js?3515:32 Warning: Text content did not match. Server: "/test-static/123" Client: "/test-statique/123"
    at div
    at TestStatic (webpack-internal:///./pages/test-static/[id].tsx:16:72)
    at MyApp (webpack-internal:///./pages/_app.tsx:36:27)
    at StyleRegistry (webpack-internal:///./node_modules/styled-jsx/dist/stylesheet-registry.js:231:34)
    at ErrorBoundary (webpack-internal:///./node_modules/@next/react-dev-overlay/lib/internal/ErrorBoundary.js:26:47)
    at ReactDevOverlay (webpack-internal:///./node_modules/@next/react-dev-overlay/lib/internal/ReactDevOverlay.js:90:23)
    at Container (webpack-internal:///./node_modules/next/dist/client/index.js:356:9)
    at AppContainer (webpack-internal:///./node_modules/next/dist/client/index.js:795:26)
    at Root (webpack-internal:///./node_modules/next/dist/client/index.js:916:27)

See more info here: https://nextjs.org/docs/messages/react-hydration-error
```

If you do a `view page source` you will see that the SSR markup is `/test-static/123` when in fact it should be using `/test-statique/123` as per the `redirects` configuration in `next.config.js`.

It appears that when using `getStaticProps` and `getStaticPaths`, the the redirect resolution is not done as it is on the happy path.
