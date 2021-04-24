import { AppProps } from 'next/app';
import type { NextLayoutComponentType } from 'next';

declare module 'next/app' {
  export type AppLayoutProps = AppProps & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Component: NextLayoutComponentType;
  };
}
