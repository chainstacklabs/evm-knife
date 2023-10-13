import Head from 'next/head';
import LayoutWrapper from '@/components/LayoutWrapper/LayoutWrapper';
import EnsToAddressConverter from '@/components/Modules/ENSToAddress/ENSToAddress';
import GAtracker from '../components/GAtracker/GAtracker';

export default function EnsToAddressPage() {
  return (
    <>
      <GAtracker />
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
        <EnsToAddressConverter />
      </LayoutWrapper>
    </>
  );
}
