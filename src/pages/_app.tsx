import type { AppProps } from "next/app";
import Head from "next/head";

import GlobalStyles from "styles/global";

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Giovanny Fialho</title>
                <link rel="shortcut icon" href="/img/icon-192.png" />
                <link rel="apple-touch-icon" href="/img/icon-512.png" />
                <meta
                    name="description"
                    content="Landing Page criada para mostrar resultados de estudos"
                />
                <link rel="manifest" href="/manifest.json" />
                <meta property="og:image" content="/img/cover-share.png" />
            </Head>
            <GlobalStyles />
            <Component {...pageProps} />
        </>
    );
}

export default App;
