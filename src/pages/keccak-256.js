import Head from 'next/head';
import LayoutWrapper from '@/components/LayoutWrapper/LayoutWrapper';
import KeccakConverter from '@/components/Modules/Keccak-256/Keccak-256';

export default function KeccakConverterPage() {
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
        <KeccakConverter />
      </LayoutWrapper>
    </>
  );
}
