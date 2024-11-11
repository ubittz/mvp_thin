import styled from 'styled-components';

import { Typography } from '@@components/Typography';
import { CATEGORY_ITEMS } from '@@pages/Search/constants';
import CategoryItem from '@@pages/Search/parts/CategoryItem';

const StyledCategory = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  .category__header {
    padding: 16px;
  }
`;

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
