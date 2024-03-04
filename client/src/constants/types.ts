export interface MenuItemProps {
  title: string,
  path: string
  onClick?: () => void;
}

export interface SocialIconProps{
  title: string;
  icon: React.ReactNode;
  url: string;
  
}