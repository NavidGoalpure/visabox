import { HtmlHTMLAttributes } from 'react';
import darkLogo from './darkLogo.svg';

interface Props extends HtmlHTMLAttributes<HTMLImageElement> {
  height?: number;
  width?: number;
}
const Logo: React.FC<Props> = ({
  height = 60,
  width = 60,
  ...props
}) => {
  return <img {...props} height={height} width={width}  alt={'menu-logo'} src={darkLogo}></img>;
};
export { Logo };
