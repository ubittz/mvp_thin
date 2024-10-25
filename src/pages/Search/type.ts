import { SEARCH_TABS } from '@@pages/Search/constants';
import { asType } from '@@types/common';

export type SearchTabs = asType<typeof SEARCH_TABS>;

export interface CategoryType {
  id: number;
  title: string;
  children?: CategoryType[];
}
