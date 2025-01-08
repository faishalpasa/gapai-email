/* eslint-disable @next/next/no-page-custom-font */

import { Body, Head, Html, Tailwind } from '@react-email/components';
import * as React from 'react';

import { CONFIG } from '../constants/tailwind';

const styles = `
  * {
    font-family: 'Plus Jakarta Sans', sans-serif;
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
        <Body className="mx-auto max-w-3xl">{children}</Body>
      </Tailwind>
    </Html>
  );
};
