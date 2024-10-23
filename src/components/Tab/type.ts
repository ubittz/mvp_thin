import { ReactNode } from 'react';

import { TabsProps } from 'react-tabs';

export interface TabProps<T extends string> extends TabsProps {
  items: TabItem<T>[];
}

export interface TabItem<T extends string> {
  type: T;
  title: string;
  content: ReactNode;
}
