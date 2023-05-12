import Head from 'next/head';
import Converter from '../components/Converter/Converter';
import LayoutWrapper from '@/components/LayoutWrapper/LayoutWrapper';

export default function Home() {
  return (
    <>
      <Head>
        <title>The EVM Swiss Army Knife — Chainstack</title>
        <meta
          name="description"
          content="The ultimate EVM tool, convert and encode EVM values, all in one
            place"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LayoutWrapper>
        <Converter />
      </LayoutWrapper>
    </>
  );
}
