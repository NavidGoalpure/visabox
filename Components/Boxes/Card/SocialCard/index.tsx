import { Socials } from 'Interfaces/Socials';
import { HTMLAttributes } from 'react';
import MobileSocialCard from './MobileCard';
interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'id'>, Socials { }
function SmartSocial({
  id,
  desc,
  locations,
  name,
  link,
  socialmediaType,
  slug,
  isFeatured,
  ...props
}: Props) {
  return (
    <MobileSocialCard
      isFeatured={isFeatured}
      desc={desc}
      name={name}
      link={link}
      socialmediaType={socialmediaType}
      locations={locations}
      slug={slug}
      id={id}
      {...props}
    />
  );
}
export default SmartSocial;
