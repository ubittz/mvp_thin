import { useNavigate } from 'react-router-dom';

import TextField from '@@components/TextField';
import { HomePanelProps } from '@@pages/Home/type';
import { KEYWORD_BY_HOME_TABS } from '@@stores/home/constants';

function SearchBar({ panelType }: HomePanelProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/my-pwa/search');
  };

  return (
    <div onClick={handleClick}>
      <TextField placeholder={`${KEYWORD_BY_HOME_TABS[panelType]}를 검색해보세요!`} />
    </div>
  );
}

export default SearchBar;
