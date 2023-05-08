import { HTMLAttributes, ReactNode } from "react";
import Type1 from "./Type1";
import Type2 from "./Type2";
interface Props extends HTMLAttributes<HTMLDivElement> {
  navigateTo: string;
  desc: ReactNode;
  buttonText: string;
  type: "TYPE1" | "TYPE2";
}
const Banner: React.FC<Props> = ({ navigateTo, desc, buttonText, type }) => {
  // if you put in a span in the desc it will be highlighted

  switch (type) {
    case "TYPE1":
      return (
        <Type1 navigateTo={navigateTo} desc={desc} buttonText={buttonText} />
      );

    case "TYPE2":
      return (
        <Type2 navigateTo={navigateTo} desc={desc} buttonText={buttonText} />
      );

    default:
      return null;
  }
};
export default Banner;
