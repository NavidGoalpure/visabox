import useDevice from 'Hooks/useDevice';
import { Socials } from 'Interfaces/Socials';
import { useState, useEffect } from 'react';
import MobileSocialCard from './MobileCard';
type Props = Socials;
function SmartSoci({
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
export default SmartSoci;
