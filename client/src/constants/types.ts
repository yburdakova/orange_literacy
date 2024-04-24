export interface MenuItemProps {
  title: string;
  path: string;
  onClick?: () => void;
}

export interface SocialIconProps{
  title: string;
  icon: React.ReactNode;
  url: string;
}

export interface NewsProps {
  image: string;
  title: string;
  description?: string;
  content: string;
  category: string;
  createdAt: string;
  eventDate?: string;
}

export interface NewsItemProps {
  news: NewsProps;
}

export interface DataProps {
  year: string;
  month: string;
  day: string;
  hours: string;
  minutes: string;
}
