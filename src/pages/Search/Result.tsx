import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Header from '@@components/Header';
import { Typography } from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { useAppState } from '@@store/hooks';

import ResultItem from './parts/ResultItem';

const StyledResult = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

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

  const profileList = useAppState((state) => state.home.workerList).map((worker) => ({
    id: worker.id,
    image: worker.image,
    name: worker.name,
    title: worker.category,
    region: worker.region,
    description: worker.description,
  }));

  return (
    <StyledResult>
      <Header onBack={() => navigate(-1)}>
        <Typography.MediumSubTitle>검색 결과 &#40;4개&#41;</Typography.MediumSubTitle>
      </Header>
      <div className='search_result__body'>
        <Typography.SmallBody color={COLORS.GRAY_SCALE_400}>대분류명 &#62; 중분류명 &#62; 소분류명</Typography.SmallBody>
        <div className='search_result__list'>
          {profileList.map((profile) => {
            const handleClick = () => {
              navigate(`/detail/worker/${profile.id}`);
            };

            return <ResultItem key={profile.id} profile={profile} onClick={handleClick} />;
          })}
        </div>
      </div>
    </StyledResult>
  );
}

export default Result;
