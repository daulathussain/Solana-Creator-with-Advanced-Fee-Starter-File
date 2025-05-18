import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Crypto King | Create Solana Token </title>
        <meta
          name="description"
          content="Create your own Solana token in minutes without coding. Simple, secure, and low-cost token creation."
        />
        <link rel="icon" href="/logo.png" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
