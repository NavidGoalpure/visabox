import { HtmlHTMLAttributes } from 'react';
import darkLogo from './darkLogo.svg';

interface Props extends HtmlHTMLAttributes<HTMLImageElement> {}
const Logo: React.FC<Props> = ({ ...props }) => {
  return <img {...props} src={darkLogo}></img>;
};
export { Logo };
