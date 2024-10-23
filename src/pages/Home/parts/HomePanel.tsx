import Banner from '@@pages/Home/parts/Banner';
import CopyRight from '@@pages/Home/parts/CopyRight';
import RecentSearch from '@@pages/Home/parts/RecentSearch';
import Recommend from '@@pages/Home/parts/Recommend';
import SearchBar from '@@pages/Home/parts/SearchBar';
import { HomePanelProps } from '@@pages/Home/type';

function HomePanel({ panelType }: HomePanelProps) {
  return (
    <div className='home__body'>
      <div className='home__body_contents'>
        <SearchBar panelType={panelType} />
        <Banner />
        <RecentSearch panelType={panelType} />
        <Recommend panelType={panelType} />
      </div>
      <CopyRight />
    </div>
  );
}

export default HomePanel;
