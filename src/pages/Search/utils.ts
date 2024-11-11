import { CATEGORY_ITEMS } from '@@pages/Search/constants';

export const getCategoryList = (categoryId: string) => {
  const categoryIdList = categoryId.split('-').map((id) => +id);

  const bigCategory = CATEGORY_ITEMS.find((category) => category.id === categoryIdList[0]);
  const mediumCategory = bigCategory?.children?.find((category) => category.id === categoryIdList[1]);
  const smallCategory = mediumCategory?.children?.find((category) => category.id === categoryIdList[2]);

  return {
    bigCategory,
    mediumCategory,
    smallCategory,
  } as const;
};
