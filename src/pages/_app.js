import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/globals.scss";
import Page from "../components/Page";
import React from "react";
import { Provider, Context } from "../components/store";
import { PageTransition } from "next-page-transitions";

export default function App({ Component, pageProps, router }) {
  return (
    <Page>
      <Provider>
        {/* <PageTransition timeout={100} classNames="page-transition"> */}
        <Component {...pageProps} key={router.route} />
        {/* </PageTransition> */}
        {/* <style jsx global>{`
          .page-transition-enter {
            opacity: 0;
          }
          .page-transition-enter-active {
            opacity: 1;
            transition: opacity 300ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 300ms;
          }
        `}</style> */}
      </Provider>
    </Page>
  );
}

App.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};
