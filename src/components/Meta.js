import Head from "next/head";

function Meta() {
  return (
    <Head>
      <meta key="charset" charSet="utf-8" />
      <meta
        key="viewport"
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />
      <meta
        key="description"
        name="description"
        content="FATE Semester Project '21."
      />
      <title key="title">The Ads Test</title>
      {/* <link
        key="favicon"
        rel="icon"
        href="/static/favicon.png"
        importance="low"
      /> */}
      {/* <link
        key="apple-touch-icon"
        rel="apple-touch-icon"
        href="/static/favicon.png"
      /> */}
    </Head>
  );
}

export default Meta;
