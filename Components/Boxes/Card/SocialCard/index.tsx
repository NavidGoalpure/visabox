import { Socials } from 'Interfaces/Socials';
import MobileSocialCard from './MobileCard';
type Props = Socials;
function SmartSocial({
  id,
  desc,
  locations,
  name,
  link,
  socialmediaType,
  slug,
  isFeatured,
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
      id={id}    />
  );
}
export default SmartSocial;
