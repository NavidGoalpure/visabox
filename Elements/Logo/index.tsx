import darkLogo from './darkLogo.svg';
import Image from 'next/image';
import { ImageProps as NextImageProps } from 'next/image';

interface Props extends Omit<NextImageProps, 'src' | 'alt'> {}
const Logo: React.FC<Props> = ({ height = 60, width = 60, ...props }) => {
  return (
    <Image
      {...props}
      height={height}
      width={width}
      alt={'Marabox Logo'}
      src={darkLogo}
      priority={true}
    />
  );
};
export { Logo };
