import useDevice from 'Hooks/useDevice';
import { useState, useEffect } from 'react';
import { SocialCard } from '../interfaces';
import MobileSocialCard from './MobileCard';
type Props = SocialCard;
function SmartSocial({
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
    />
  );
}
export default SmartSocial;
