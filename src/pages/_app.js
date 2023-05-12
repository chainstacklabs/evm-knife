import '@/styles/globals.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import '../styles/Home.module.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
