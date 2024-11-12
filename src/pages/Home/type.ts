import { HomeTabs, Profile, UserType } from '@@stores/home/type';

export interface RecentSearchCardProps {
  profile: Profile;
  userType: UserType;
}

export interface RecommendCardProps {
  profile: Profile;
  userType: UserType;
}

export interface HomePanelProps {
  panelType: HomeTabs;
}
