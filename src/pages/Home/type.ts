export interface RecentSearchCardProps {
  profile: RecentSearchProfile;
}

export interface RecommendCardProps {
  profile: RecommendProfile;
}

export interface RecentSearchProfile {
  image: string;
  name: string;
  title: string;
  region: string;
}

export interface RecommendProfile {
  image: string;
  name: string;
  title: string;
  region: string;
  description: string;
}
