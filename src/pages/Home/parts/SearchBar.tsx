import styled from 'styled-components';

import TextField from '@@components/TextField';
import { HomePanelProps } from '@@pages/Home/type';
import { KEYWORD_BY_HOME_TABS } from '@@stores/home/constants';

const StyledSearchBar = styled.div``;

function SearchBar({ panelType }: HomePanelProps) {
  return (
    <StyledSearchBar>
      <TextField placeholder={`${KEYWORD_BY_HOME_TABS[panelType]}를 검색해보세요!`} />
    </StyledSearchBar>
  );
}

export default SearchBar;
