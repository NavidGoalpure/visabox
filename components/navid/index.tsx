import Link from 'next/link';
import { useTranslation } from './useTranslation';

const Navid = () => {
  const { t } = useTranslation();

  return (
    <>
      <div>
        <Link href='/second-page'>
          {/* <button type='button'>{t('to-second-page')}</button> */}
          sdfa
        </Link>
      </div>
    </>
  );
};

export default Navid;
