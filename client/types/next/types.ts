import { FC } from 'react';

export type ComposedLayout<T extends FC> = FC & { layout: T };

export interface PageProps {
  country: string;
  locale: string;
  preview: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  page: any; // TO-DO: add proper typing. not done yet as the datamodel is still pending to be defined
}

export interface PreviewProps {
  qsParams: Record<string, unknown>;
  type: string;
}
