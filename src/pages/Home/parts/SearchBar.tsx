import { ChangeEventHandler, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { COLORS } from '@@constants/colors';
import { SearchIcon } from '@@constants/images';
import { HomePanelProps } from '@@pages/Home/type';
import { SEARCH_TABS } from '@@pages/Search/constants';
import { useAppState } from '@@store/hooks';
import { EX_BY_HOME_TABS, KEYWORD_BY_HOME_TABS, USER_TYPE } from '@@stores/home/constants';

const StyledTextField = styled.div<{ $height?: number }>`
  position: relative;
  height: 100px;

  .search__icon {
    position: absolute;
    right: 16px;
    top: 12px;
  }
`;

const StyledInput = styled.textarea<{ $background: string }>`
  width: 100%;
  height: 100%;
  padding: 12px 16px;
  padding-right: 56px;

  background: ${({ $background }) => $background};
  border-radius: 20px;
  border: 1px solid ${COLORS.GRAY_SCALE_050};

  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  letter-spacing: -0.04em;

  &::placeholder {
    color: ${COLORS.GRAY_SCALE_300};
  }
`;

function SearchBar({ panelType }: HomePanelProps) {
  const navigate = useNavigate();
  const selectedTab = useAppState((state) => state.home.selectedTab);

  const [keyword, setKeyword] = useState<string>('');

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setKeyword(e.target.value);
  };

  const handleClick = () => {
    navigate(`/thin/search/result?type=${selectedTab === SEARCH_TABS.FIND_WORKER ? USER_TYPE.WORKER : USER_TYPE.COMPANY}&keyword=${keyword}`);
  };

  return (
    <StyledTextField>
      <StyledInput
        $background={COLORS.GRAY_SCALE_000}
        placeholder={`${KEYWORD_BY_HOME_TABS[panelType]}를 검색해보세요!\nex)"${EX_BY_HOME_TABS[panelType]}"`}
        value={keyword}
        onChange={handleChange}
      />
      <SearchIcon className='search__icon' onClick={handleClick} />
    </StyledTextField>
  );
}

export default SearchBar;
