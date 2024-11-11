import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

import Header from '@@components/Header';
import { Typography } from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import ResultItem from '@@pages/Search/parts/ResultItem';
import { getCategoryList } from '@@pages/Search/utils';
import { useAppState } from '@@store/hooks';
import { USER_TYPE } from '@@stores/home/constants';
import { UserType } from '@@stores/home/type';

const StyledResult = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  .search_result__body {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 16px;
    overflow-y: scroll;
    padding: 16px;
    background: ${COLORS.GRAY_SCALE_050};

    .search_result__list {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
  }
`;

function Result() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const userType = searchParams.get('type') as UserType;
  const categoryId = (searchParams.get('categoryId') ?? undefined) as string | undefined;
  const keyword = (searchParams.get('keyword') ?? undefined) as string | undefined;

  const { bigCategory, mediumCategory, smallCategory } = getCategoryList(categoryId ?? '');

  const profileList = useAppState((state) => state.home[userType === USER_TYPE.WORKER ? 'workerList' : 'companyList'])
    .filter((profile) => {
      return keyword === undefined || JSON.stringify(profile).includes(keyword);
    })
    .filter(({ category }) => categoryId === undefined || category === categoryId)
    .map((profile) => ({
      id: profile.id,
      image: profile.image,
      name: profile.name,
      category: profile.category,
      region: profile.region,
      description: profile.description,
    }));

  return (
    <StyledResult>
      <Header onBack={() => navigate(-1)}>
        <Typography.MediumSubTitle>검색 결과 &#40;{profileList.length}개&#41;</Typography.MediumSubTitle>
      </Header>
      <div className='search_result__body'>
        <Typography.SmallBody color={COLORS.GRAY_SCALE_400}>
          {keyword ? `검색어: "${keyword}"` : `${bigCategory?.title} &#62; ${mediumCategory?.title} &#62; ${smallCategory?.title}`}
        </Typography.SmallBody>
        <div className='search_result__list'>
          {profileList.length === 0 && <Typography.LargeBody>데이터가 존재하지 않습니다.</Typography.LargeBody>}
          {profileList.map((profile) => {
            const handleClick = () => {
              navigate(`/thin/detail/${userType}/${profile.id}`);
            };

            return <ResultItem key={profile.id} profile={profile} onClick={handleClick} />;
          })}
        </div>
      </div>
    </StyledResult>
  );
}

export default Result;
