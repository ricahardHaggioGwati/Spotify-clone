import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Spotify</title>
				<link rel='icon' type='image/x-icon' href='/King.svg' />
				<meta name='description' content='Spotify clone' />
				<meta name='keywords' content='spotify web clone' />
				<meta name='author' content='R.G' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			</Head>

			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
