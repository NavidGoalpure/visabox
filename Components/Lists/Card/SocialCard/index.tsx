import { Socials } from 'Interfaces/Lists/Socials';
import { HTMLAttributes } from 'react';
import MobileSocialCard from './MobileCard';
interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'id'>, Socials {}
function SmartSocial({ ...props }: Props) {
  return <MobileSocialCard {...props} />;
}
export default SmartSocial;
