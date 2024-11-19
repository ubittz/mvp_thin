import { ChangeEventHandler, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import TextField from '@@components/TextField';
import { HomePanelProps } from '@@pages/Home/type';
import { SEARCH_TABS } from '@@pages/Search/constants';
import { useAppState } from '@@store/hooks';
import { KEYWORD_BY_HOME_TABS, USER_TYPE } from '@@stores/home/constants';

function SearchBar({ panelType }: HomePanelProps) {
  const navigate = useNavigate();
  const selectedTab = useAppState((state) => state.home.selectedTab);

  const [keyword, setKeyword] = useState<string>('');

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setKeyword(e.target.value);
  };

  const handleClick = () => {
    navigate(`/thin/search/result?type=${selectedTab === SEARCH_TABS.FIND_WORKER ? USER_TYPE.WORKER : USER_TYPE.COMPANY}&keyword=${keyword}`);
  };

  return (
    <TextField value={keyword} placeholder={`${KEYWORD_BY_HOME_TABS[panelType]}를 검색해보세요!`} onChange={handleChange} onClickIcon={handleClick} />
  );
}

export default SearchBar;
