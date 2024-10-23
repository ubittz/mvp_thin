import { PropsWithChildren } from 'react';

export type HeaderProps = PropsWithChildren<{
  onBack: () => void;
}>;
