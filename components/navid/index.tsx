import { useTranslation } from 'hooks/useTraslation';
import Link from 'next/link';
import { componrntStatements } from './LocaleConst';

const Navid = () => {
  const { t } = useTranslation(componrntStatements);

  return (
    <>
      <div>
        <Link href='/second-page'>
          <button type='button'>{t('to-second-page')}</button>
        </Link>
      </div>
    </>
  );
};

export default Navid;
