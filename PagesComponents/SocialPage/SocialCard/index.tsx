import useDevice from "Hooks/useDevice";
import { useState, useEffect } from "react";
import { TelegramGroup } from "../interfaces";
import DesktopSocialCard from "./DesktopCard";
import MobileSocialCard from "./MobileCard";
type Props = TelegramGroup;
function SmartSoci({
  desc,
  locations,
  name,
  link,
  socialmediaType,
  slug,
  isFeatured,
}: Props) {
  const [screen, setScreen] = useState<"MOBILE" | "DESKTOP">("MOBILE");
  const { isLaptop } = useDevice();

  useEffect(() => {
    if (isLaptop) setScreen("DESKTOP");
  });
  if (screen === "MOBILE")
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
  return (
    <DesktopSocialCard
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
