import styled from 'styled-components';

import TextField from '@@components/TextField';

const StyledSearchBar = styled.div``;

function SearchBar() {
  return (
    <StyledSearchBar>
      <TextField placeholder='워커를 검색해보세요!' />
    </StyledSearchBar>
  );
}

export default SearchBar;
