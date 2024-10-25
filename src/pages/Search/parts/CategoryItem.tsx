import { useState } from 'react';

import styled from 'styled-components';

import { Typography } from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { DownArrowIcon, RightArrowIcon } from '@@constants/images';

import { CategoryType } from '../type';

const StyledCategoryItem = styled.div<{ $depth: number }>`
  display: flex;
  flex-direction: column;

  & > .category_item__body {
    display: flex;
    align-items: center;
    padding: 0 16px;
    padding-left: ${({ $depth }) => ($depth === 0 ? 16 : 24)}px;
    height: 56px;
    border-bottom: 1px solid ${COLORS.GRAY_SCALE_050};
    ${({ $depth }) => $depth >= 2 && `background: ${COLORS.GRAY_SCALE_050};`}

    .category_item__title {
      flex: 1;
    }

    .category_item__icon {
      flex: 0 0 auto;
    }
  }

  & > .category_item__children {
    height: 0;
    overflow: hidden;

    &.category_item__children--spread {
      height: auto;
    }
  }
`;

function CategoryItem({ category, depth }: { category: CategoryType; depth: number }) {
  const TitleComponent = depth === 0 ? Typography.SmallSubTitle : Typography.SmallBody;

  const [spread, setSpread] = useState<boolean>(false);

  const handleClick = () => {
    setSpread(!spread);
  };

  return (
    <StyledCategoryItem $depth={depth}>
      <div className='category_item__body' onClick={handleClick}>
        <TitleComponent className='category_item__title'>{category.title}</TitleComponent>
        {!!(category.children ?? []).length && (
          <div className='category_item__icon'>{spread ? <DownArrowIcon width={24} height={24} /> : <RightArrowIcon width={24} height={24} />}</div>
        )}
      </div>
      <div className={`category_item__children ${spread && 'category_item__children--spread'}`}>
        {category.children?.map((category) => <CategoryItem key={category.id} category={category} depth={depth + 1} />)}
      </div>
    </StyledCategoryItem>
  );
}

export default CategoryItem;