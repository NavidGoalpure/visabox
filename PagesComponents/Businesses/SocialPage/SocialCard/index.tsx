import useDevice from 'Hooks/useDevice';
import { useState, useEffect } from 'react';
import { GroupCard } from '../interfaces';
import MobileSocialCard from './MobileCard';
type Props = GroupCard;
function SmartSoci({
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
export default SmartSoci;
