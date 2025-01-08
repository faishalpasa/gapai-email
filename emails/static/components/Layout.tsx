/* eslint-disable @next/next/no-page-custom-font */

import { Body, Head, Html, Tailwind } from '@react-email/components';
import * as React from 'react';

import { CONFIG } from '../constants/tailwind';

const styles = `
  * {
    font-family: 'Plus Jakarta Sans', sans-serif;
  }
  @media only screen and (min-width: 576px) {
    .mobile {
      display: none !important;
    }
    .desktop {
      display: block !important;
    }
  }
  
  @media only screen and (max-width: 575px) {
    .mobile {
      display: none !important;
    }
    .desktop {
      display: block !important;
    }
  }

  @media only screen and (max-width: 422px) {
    .mobile {
      display: block !important;
    }
    .desktop {
      display: none !important;
    }
  }
`;

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: styles
          }}
        />
      </Head>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: CONFIG.theme.extend.colors
            }
          }
        }}
      >
        <Body className="mx-auto">{children}</Body>
      </Tailwind>
    </Html>
  );
};
