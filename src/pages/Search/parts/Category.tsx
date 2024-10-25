import styled from 'styled-components';

import { Typography } from '@@components/Typography';
import { CategoryType } from '@@pages/Search/type';

import CategoryItem from './CategoryItem';

const StyledCategory = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  .category__header {
    padding: 16px;
  }
`;

const CATEGORY_ITEMS: CategoryType[] = [
  {
    id: 1,
    title: '대분류 1',
    children: [
      {
        id: 1,
        title: '중분류 1',
        children: [
          {
            id: 1,
            title: '소분류 1',
          },
          {
            id: 2,
            title: '소분류 2',
          },
        ],
      },
      {
        id: 2,
        title: '중분류 2',
        children: [
          {
            id: 3,
            title: '소분류 3',
          },
          {
            id: 4,
            title: '소분류 4',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: '대분류 2',
    children: [
      {
        id: 1,
        title: '중분류 1',
        children: [
          {
            id: 1,
            title: '소분류 1',
          },
          {
            id: 2,
            title: '소분류 2',
          },
        ],
      },
      {
        id: 2,
        title: '중분류 2',
        children: [
          {
            id: 3,
            title: '소분류 3',
          },
          {
            id: 4,
            title: '소분류 4',
          },
        ],
      },
    ],
  },
];

function Category() {
  return (
    <StyledCategory>
      <div className='category__header'>
        <Typography.MediumButton>카테고리</Typography.MediumButton>
      </div>
      <div className='category__body'>
        {CATEGORY_ITEMS.map((category) => (
          <CategoryItem key={category.id} category={category} depth={0} />
        ))}
      </div>
    </StyledCategory>
  );
}

export default Category;
