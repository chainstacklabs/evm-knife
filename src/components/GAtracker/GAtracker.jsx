import React from 'react';
import Script from 'next/script';

export default function GAtracker() {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKER_ID}`}
        id="google-tag"
      />

      <Script strategy="lazyOnload" id="google-tag-2">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.GA_TRACKER_ID}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
    </>
  );
}
