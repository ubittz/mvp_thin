import { ChangeEventHandler, useState } from 'react';

import Category from './Category';
import Keyword from './Keyword';
import { SearchTabs } from '../type';

function SearchBody({ panelType }: { panelType: SearchTabs }) {
  const [keyword, setKeyword] = useState<string>('');

  const handleChangeKeyword: ChangeEventHandler<HTMLInputElement> = (e) => {
    setKeyword(e.target.value);
  };

  console.log(panelType);

  return (
    <div className='search__body'>
      <Keyword value={keyword} onChange={handleChangeKeyword} />
      <Category />
    </div>
  );
}

export default SearchBody;
