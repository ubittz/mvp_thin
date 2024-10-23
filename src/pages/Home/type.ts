import { HomeTabs, Profile } from '@@stores/home/type';

export interface RecentSearchCardProps {
  profile: Profile;
}

export interface RecommendCardProps {
  profile: Profile;
}

export interface HomePanelProps {
  panelType: HomeTabs;
}
