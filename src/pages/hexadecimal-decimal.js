import Head from 'next/head';
import LayoutWrapper from '@/components/LayoutWrapper/LayoutWrapper';
import HexConverter from '@/components/Modules/HexConverter/HexConverter';

export default function HexadecimalDecimalPage() {
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
        <HexConverter
          name={'Hexadecimal → decimal'}
          type={'Hexadecimal → decimal'.toLowerCase().replace(' → ', '-')}
          description={'Convert hexadecimal to decimal value.'}
        />
      </LayoutWrapper>
    </>
  );
}
