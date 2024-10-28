import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Header from '@@components/Header';
import Tab from '@@components/Tab';
import { Typography } from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { SearchIcon } from '@@constants/images';

import { SEARCH_TABS } from './constants';
import SearchBody from './parts/SearchBody';

const StyledSearch = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  .search__body {
    flex: 1;
    display: flex;
    flex-direction: column;

    overflow-y: scroll;
  }
`;

const StyledSearchButton = styled.button`
  position: fixed;
  bottom: 26px;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  align-items: center;
  gap: 4px;
  outline: none;
  border: none;
  height: 48px;
  padding: 14px 26px;
  padding-right: 30px;
  background: ${COLORS.MAIN_400};
  border-radius: 44px;
`;

function Search() {
  const TAB_ITEMS = [
    {
      type: SEARCH_TABS.FIND_WORKER,
      title: '워커 찾기',
      content: <SearchBody panelType={SEARCH_TABS.FIND_WORKER} />,
    },
    {
      type: SEARCH_TABS.FIND_COMPANY,
      title: '기업 찾기',
      content: <SearchBody panelType={SEARCH_TABS.FIND_COMPANY} />,
    },
  ];

  const navigate = useNavigate();

  const handleClickSearch = () => {
    navigate(`/search/result/`);
  };

  return (
    <StyledSearch>
      <Header onBack={() => navigate(-1)}>
        <Typography.MediumSubTitle>검색</Typography.MediumSubTitle>
      </Header>
      <Tab items={TAB_ITEMS} />
      <StyledSearchButton>
        <SearchIcon color={COLORS.GRAY_SCALE_000} />
        <Typography.MediumButton as='span' color={COLORS.GRAY_SCALE_000} onClick={handleClickSearch}>
          검색하기 &#40;n개&#41;
        </Typography.MediumButton>
      </StyledSearchButton>
    </StyledSearch>
  );
}

export default Search;
