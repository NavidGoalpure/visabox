import { deviceMin } from 'Consts/device';
import styled from 'styled-components';
import { Layer1_TitleStyle } from 'Styles/Theme/Layers/layer1/style';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { componentStatements, LanguageKeys } from './const';
import { PrimaryButton } from 'Elements/Button/Primary';

import { useListData } from './useListData';
import NoData from 'Components/NoData';
import { ContentOrError } from 'Components/contentOrError';
import { SmartButton } from './SmartButton';
import { useLastBasicForm } from './useLastBasicForm';
import { useEffect, useState } from 'react';
import BasicFormCard from './BasicFormCard';
import CardsSection from './CardsSection';

function Content() {
  const { t } = useStaticTranslation(componentStatements);
  const [lastBasicFormId, setLastBasicFormId] = useState<string | undefined>();
  const { lastBasicForm } = useLastBasicForm({ resParams: `_id` });
  useEffect(() => {
    if (lastBasicForm?._id) setLastBasicFormId(lastBasicForm?._id);
  }, [lastBasicForm]);
  //این هوکیه که لیست بسیک فرم ها رو برمیگردونه
  const {
    forms,
    isFetching,
    isRefetching,
    fetchNextPage,
    isError,
    isLoading,
    hasNextPage,
  } = useListData(lastBasicFormId);
  return (
    <Container>
      <PageTitle>{t(LanguageKeys.PageTitle)}</PageTitle>
      <CardContainer>
        {!forms?.pages?.[0]?.length && !isFetching && !isLoading ? (
          <NoData hasIcon={false} themeLayer='1' />
        ) : (
          <>
            <ContentOrError
              isError={isError}
              content={<CardsSection forms={forms} />}
            />
            <SmartButton
              isError={isError}
              isFetching={isFetching || isRefetching}
              hasNextPage={hasNextPage || false}
              fetchNextPage={fetchNextPage}
            />
          </>
        )}
      </CardContainer>
    </Container>
  );
}
export default Content;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  @media ${deviceMin.tabletS} {
    justify-content: space-between;
  }
`;
const PageTitle = styled.h1`
  ${Layer1_TitleStyle}
  @media ${deviceMin.tabletS} {
    width: 100%;
    text-align: start;
  }
`;
const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
`;
