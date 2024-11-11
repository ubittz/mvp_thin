import { ChangeEventHandler } from 'react';

import { SEARCH_TABS } from '@@pages/Search/constants';
import Category from '@@pages/Search/parts/Category';
import Keyword from '@@pages/Search/parts/Keyword';
import { SearchTabs } from '@@pages/Search/type';
import { USER_TYPE } from '@@stores/home/constants';

function SearchBody({ panelType, keyword, setKeyword }: { panelType: SearchTabs; keyword: string; setKeyword: (keyword: string) => void }) {
  const handleChangeKeyword: ChangeEventHandler<HTMLInputElement> = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <div className='search__body'>
      <Keyword value={keyword} onChange={handleChangeKeyword} />
      <Category type={panelType === SEARCH_TABS.FIND_WORKER ? USER_TYPE.WORKER : USER_TYPE.COMPANY} />
    </div>
  );
}

export default SearchBody;
